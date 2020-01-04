import AsyncStorage from "@react-native-community/async-storage";
import RNFetchBlob from "rn-fetch-blob";
import firebase from "react-native-firebase";


class firebaseServices {

    signUpWith(email, password, callback) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                AsyncStorage.setItem('CURRENT_USER', JSON.stringify(user.user));
                callback({isSuccess: true, response: user.user, message: "user logged in successfully."});// user.user;
            })
            .catch(error => {
                callback({isSuccess: false, response: null, message: error.message});
            });
    }

    loginWithEmailPass(email, password, callback) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                AsyncStorage.setItem('CURRENT_USER', JSON.stringify(user.user));
                callback({isSuccess: true, response: user.user, message: "user logged in successfully."});// user.user;
            })
            .catch(error => {
                callback({isSuccess: false, response: null, message: error.message});
            });
    }


    loginWithSocialMediaCredentials(socialCredentials, callback) {
        return firebase
            .auth()
            .signInWithCredential(socialCredentials)
            .then(user => {
                AsyncStorage.setItem('CURRENT_USER', JSON.stringify(user.user));
                callback({isSuccess: true, response: user.user, message: "user logged in successfully."});// user.user;
            })
            .catch(error => {
                callback({isSuccess: false, response: null, message: error.message});
            });
    }

    setProfileForUser(user,email,fcmToken, callback) {
        firebase
            .firestore()
            .collection("userProfile")
            .doc(user.uid)
            .set({
                user:user,
                email:email,
                fcmToken:fcmToken,

            }).then(response => {
                callback({isSuccess: true, response: response, message: "Profile created successfully successfully"});
            }).catch(error => {
                callback({isSuccess: false, response: null, message: error});
            });
    }

    updateProfileForUser(user, profileData, callback) {
        console.log("User ===>> ", user);
        console.log("profileData===>> ", profileData);
        let firebaseRef = firebase.firestore().collection("userProfile").doc(user.uid)
        console.log("Update Profile firebaseRef ===>> ",firebaseRef);

        firebaseRef.update(profileData).then(response => {
            callback({isSuccess: true, response: response, message: "Profile updated successfully"});
        }).catch(error => {
            callback({isSuccess: false, response: null, message: error});
        });
    }

    getProfileForUser = (user, callback) =>{
        firebase.firestore().collection("userProfile").doc(user.uid).get().then((snapshot) => {
            callback({isSuccess: true, response: snapshot, message: "FCM token updated successfully"});
        })
            .catch((error) => {
                callback({isSuccess: false, response: null, message: error});
            });

    }

    updateFCMTokenForUser = (user, fcmToken, isFromSocialMedia, callback) => {

        let firebaseRef = firebase.firestore().collection("userProfile").doc(user.uid);

        if (isFromSocialMedia) {
            return firebaseRef.set({fcmToken: fcmToken,})
                .then(response => {
                    callback({isSuccess: true, response: null, message: "FCM token updated successfully"});
                }).catch(error => {
                    callback({isSuccess: false, response: null, message: error});
                });
        } else {
            return firebaseRef.update({fcmToken: fcmToken,})
                .then(response => {
                    callback({isSuccess: true, response: null, message: "FCM token updated successfully"});
                }).catch(error => {
                    callback({isSuccess: false, response: null, message: error});
                });
        }
    };

    uploadImage(imagePath, imageName, callback) {
        const image = (Platform.OS==='android') ? imagePath.uri : imagePath.uri.replace('file://', '') //imagePath.uri;
        const uid = firebase.auth().currentUser.uid;
        const Blob = RNFetchBlob.polyfill.Blob;
        const fs = RNFetchBlob.fs;
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
        window.Blob = Blob;

        let uploadBlob = null;
        const imageRef = firebase.storage().ref(`profileImage/${uid}/${imageName}.png`);
        let mime = "image/jpg";
        return fs.readFile(image, "base64")
            .then(data => {
                return Blob.build(data, {type: `${mime};BASE64`});
            })
            .then(blob => {
                uploadBlob = blob;
                return imageRef.put(blob._ref, {contentType: mime});
            })
            .then(() => {
                uploadBlob.close();
                return imageRef.getDownloadURL();
            })
            .then(url => {
                callback({isSuccess: true, response: url, message: "Image uploaded successfully"});
                return url;
            })
            .catch(error => {
                callback({isSuccess: false, response: null, message: "Image uploading failed"});
                console.log(error);
            });
    }



    fetchProducts(callback) {
        let firebaseCollection = firebase.firestore().collection('products');
        this.firebaseFetch(firebaseCollection, (response) => {
            callback(response);
        });
    }

    fetchCommentsForProduct= (productID, callback) =>{

        let firebaseCollection = firebase.firestore().collection('productsComments').where("productID", "==", productID);

        this.firebaseFetch(firebaseCollection, (response) => {
            callback(response);
        });
    }



    addNewOrder= (order, callback) => {
        let firebaseRef = firebase.firestore().collection("orders");
        firebaseRef.add(order).then(response => {
            callback({isSuccess: true, response: null, message: "New order created Successfully"});
        }).catch(error => {
            callback({isSuccess: false, response: null, message: error});
        });
    }

    fetchOrdersForUser = (user, status, callback) => {
        let firestore = firebase.firestore();
        let firebaseCollection = firestore.collection('orders').where("status", "==", status).where("userID", "==", user.uid);

        this.firebaseFetch(firebaseCollection, (response) => {
            callback(response);
        });
    }

    fetchAllhOrdersForUser = (user, callback) => {
        let firestore = firebase.firestore();
        let firebaseCollection = firestore.collection('orders').where("userID", "==", user.uid);

        this.firebaseFetch(firebaseCollection, (response) => {
            callback(response);
        });
    }

    fetchAllhOrders= (callback) => {
        let firestore = firebase.firestore();
        let firebaseCollection = firestore.collection('orders');

        this.firebaseFetch(firebaseCollection, (response) => {
            callback(response);
        });
    }


    updateOrder =(order, orderData, callback) =>{
        console.log("ORDER TO UPDATE ===>>>", order);
        let firebaseRef = firebase.firestore().collection("orders").doc(order.id);
        firebaseRef.update(orderData)
            .then(response => {
                callback({isSuccess: true, response: null, message: "Order updated Successfully"});
            }).catch(error => {
            callback({isSuccess: false, response: null, message: error});
        });
    }



    addNewComment = (commentData, callback) =>{
        console.log("New Order===>>>", commentData);
        let firebaseRef = firebase.firestore().collection("productsComments");
        firebaseRef.add(commentData).then(response => {
            callback({isSuccess: true, response: null, message: "Thank you for your review"});
        }).catch(error => {
            callback({isSuccess: false, response: null, message: error});
        });
    }


    firebaseFetch(collection, callback) {
        collection.get().then(snapshot => {
            callback({isSuccess: true, response: snapshot, message: "Data collected successfully"});
        }).catch(error => {
            callback({isSuccess: false, response: null, message: error});
        });
    }


    fetchOrderHistory() {
        return firebase.firestore().collection('orderHistory').get().then(snapshot => {
            return snapshot
        }).catch(error => {
            console.log(error);
        });
    }

    fetchOrderQueue() {
        return firebase.firestore().collection('orderQueue').get().then(snapshot => {
            return snapshot
        }).catch(error => {
            console.log(error);
        });
    }

    fetchUserInfo(uid) {
        console.log("UID ===>>>", uid)
        return firebase
            .firestore()
            .collection("userProfile")
            .doc(uid)
            .get().then((snapshot) => {
                return snapshot.data();
            })
            .catch((error) => {
                return error;
            });
    }


    addToUserCart(userCart, uid) {
        let userCarts = [];
        return firebase
            .firestore()
            .collection("userProfile")
            .doc(uid)
            .get()
            .then(snapshot => {
                if (snapshot.data().userCartList !== undefined) {
                    userCarts = snapshot.data().userCartList;
                    let arr = [...userCarts, ...userCart];
                    return firebase
                        .firestore()
                        .collection("userProfile")
                        .doc(uid)
                        .update({
                            userCartList: arr
                        });
                } else {
                    // User Create his cart list first time
                    return firebase
                        .firestore()
                        .collection("userProfile")
                        .doc(uid)
                        .update({
                            userCartList: userCart
                        });
                }
            });
    }



    setImageNameToUserFirestore = (imageName) => {
        return firebase
            .firestore()
            .collection("userProfile")
            .doc(firebase.auth().currentUser.uid)
            .update({
                profileImage: `${imageName}.png`
            });
    };



    makeOrder(amount, userCartList, uid) {
        return firebase
            .firestore()
            .collection("orderQueue")
            .add({
                userUID: uid,
                total_amount: amount,
                status: 'Requested',
                cart_list: userCartList,
            });
    }

    clearUserCart(uid) {
        return firebase
            .firestore()
            .collection("userProfile")
            .doc(uid)
            .update({
                userCartList: "",
            });
    }

    addOrderReference(referenceId, uid) {
        let array = [];
        let orderArray = [];
        array.push({
            order_id: referenceId,
            // stripe_resp: stripeResponse.data,
        });
        firebase
            .firestore()
            .collection("userProfile")
            .doc(uid)
            .get()
            .then(snapshot => {
                if (snapshot.data().orders !== undefined) {
                    orderArray = [...snapshot.data().orders, ...array];
                    return firebase
                        .firestore()
                        .collection("userProfile")
                        .doc(uid)
                        .set(
                            {orders: orderArray},
                            {merge: true}
                        );
                } else {
                    return firebase
                        .firestore()
                        .collection("userProfile")
                        .doc(uid)
                        .set(
                            {orders: [{order_id: referenceId}]},
                            {merge: true}
                        );
                }
            });
    }

    fetchRequestedOrdersId(uid) {
        return firebase
            .firestore()
            .collection("userProfile")
            .doc(uid)
            .get()
            .then(snapshot => {
                return snapshot.data()
            })
            .catch((error) => {
                return error;
            })
    }

    fetchRequestedOrders(orderId) {
        return firebase
            .firestore()
            .collection("orderQueue")
            .doc(orderId)
            .get()
            .then(snapshot => {
                return snapshot.data()
            })
            .catch((error) => {
                return error;
            })
    }

    fetchOrderDelivery() {
        return firebase.firestore().collection("OrderDelivery").get().then(response => {
            return response;
        })
    }

    orderDeliveryCart(orderId) {
        return firebase
            .firestore()
            .collection("orderQueue").doc(orderId.trim())
            .get()
            .then(snapshot => {
                return snapshot.data()
            })
            .catch((error) => {
                return error;
            })
    }

    getOrderHistory() {
        return firebase
            .firestore()
            .collection("orderHistory")
            .get()
            .then(snapshot => {
                return snapshot
            })
            .catch((error) => {
                return error;
            })
    }





    commentHandler = (comments) => {
        return firebase.firestore().collection("comments").doc(firebase.auth().currentUser.uid).set(
            {
                comment: comments
            }
        )
    };

    addComments = (review, rating, date) => {
        let Comments = [];
        let data;
        return firebase.firestore().collection("comments").get().then(response => {
            response.forEach(response => {
                console.log("response===>", response.data())
                data = response.data();
                console.log("data reso--->", data)
            })
            console.log("data--->", data)
            if (data !== undefined) {
                Comments = data.comment;
                let arr = [...Comments, review];
                return firebase
                    .firestore()
                    .collection("comments")
                    .doc()
                    .update({
                        comment: arr,
                        rating: rating,
                        date: date
                    });
            } else {
                return firebase
                    .firestore()
                    .collection("comments")
                    .doc()
                    .set({
                        comment: review,
                        rating: rating,
                        date: date
                    });
            }
        })
    };
    getComment = () => {
        return firebase.firestore().collection("comments").doc().get().then(resp => {
            return resp
        })
    };

    sendNotification = (fcmToken, title, message, callback) => {
        const dataModal = {
            "priority": "HIGH",
            "content_available": true,
            "notification": {
                "title": title,
                "body": message,
            },
            "data": {
                "channelId": "e7eee0aa8551c5e",
            },
            "to": fcmToken
        };

        fetch('https://fcm.googleapis.com/fcm/send', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'key=AAAABrDmIXI:APA91bE49OgtNUbjCiTsuVMFZjZtV8fhayzgC0n_7iGlRNjbB0SdLXLl3Pves4ONm9U0eHbzZ635qZQlJA621zNBydOPT-zTvgBz6iJq0aEa93OjkVbGV4QPEwq-h8niMON0nxdQQGJ2'
            },
            body: JSON.stringify(dataModal)
        }).then((res) => {
            callback(true);
        }).catch(error =>{
            console.log(error);
            callback(false);
        })
    }
}

const apiService = new firebaseServices();

export default apiService;

