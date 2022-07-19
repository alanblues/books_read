import { db } from "../firebase/config";

export const getBooks = async () => {
    let books = [];
    await db.collection('books').get().then((query) => {
        query.forEach((d) => {
            books.push({
                id: d.id,
                author: d.data().author,
                title: d.data().title,
                read: d.data().read
            });
        });
    });
    return books;
}

export const saveBook = async book => {
    let response;
    await db.collection("books").add({
        title: book.title,
        author: book.author,
        read: false
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            response = true;
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            response = null;
        });

    return response;
}

export const updateBook = async idBook => {
    let response;
    const docRef = db.collection('books').doc(idBook);
    const document = await docRef.get();

    if(document.exists) {
        await docRef.set({
            author: document.data().author,
            title: document.data().title,
            read: !document.data().read
        })
        .then(() => response = true)
        .catch(() => response = false)
    } else {
        response = false;
    }
    return response;
}