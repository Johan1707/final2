import { db } from '../firebase'
import { collection, getDoc, getDocs, onSnapshot, doc } from 'firebase/firestore'

export const useCollections = () => {

    const getCollectionRef = name => collection(db, name)

    const getResult = async (query) => {
        const querySnapshot = await getDocs(query)
        return mapDocs(querySnapshot)
    }

    const one = async (name, id) => {
        const docRef = doc(db, name, id)
        const docSnap = await getDoc(docRef)
        return docSnap.exists() ? { ...docSnap.data() } : null
    }
    
    const getAll = async (name = null) => {
        const collectionRef = getCollectionRef(name)
        return await getResult(collectionRef)
    }

    const onGetDocuments = (name, callback) => {
        return onSnapshot(getCollectionRef(name), callback)
    }

    const mapDocs = (querySnapshot) => {
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    }

    return {
        onGetDocuments,
        one,
        mapDocs
    }
}