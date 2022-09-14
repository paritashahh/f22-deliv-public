import { Filter3Sharp } from "@mui/icons-material";
import { addDoc, updateDoc, deleteDoc, collection, doc, query, where, getDocs } from "firebase/firestore";
import { db } from './firebase';

// Functions for database mutations

export const emptyEntry = {
   name: "",
   link: "",
   description: "",
   user: "",
   category: 0,
}

export async function addEntry(entry) {
   await addDoc(collection(db, "entries"), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid,
   });
}

export async function editEntry(entry) {
   await updateDoc(doc(db, "entries", entry.id), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      category: entry.category,
   });
}

export async function deleteEntry(entry) {
   await deleteDoc(doc(db, "entries", entry.id), {
   });
}

// unused function--implemented querying functionality to filter search results but unsufficient permissions 
export async function queryEntry(filters) {
   // query for entries that match the filter category
   const filteredEntries = query(collection(db, "entries"), where("category", 'in', filters));
   await getDocs(filteredEntries);
}
