import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "../src/firebase-config";
import { useAuth } from "./Auth/AuthContext";

const CharacterDetail = (props) => {
  const [inList, setInList] = useState(false);
  const router = useRouter();
  const { user } = useAuth();
  if (user) {
    const getData = async () => {
      const userSnap = await getDoc(doc(db, "users", user.uid));
      if (!userSnap.data()) {
        await setDoc(doc(db, "users", user.uid), { fav: [] });
      }
      setInList(userSnap.data()?.fav.includes(props.det.char_id));
    };
    getData();
  }
  const favChar = async () => {
    if (user) {
      if (inList) {
        await updateDoc(doc(db, "users", user.uid), {
          fav: arrayRemove(props.det.char_id),
        });
        setInList(!inList);
      } else {
        await updateDoc(doc(db, "users", user.uid), {
          fav: arrayUnion(props.det.char_id),
        });
        setInList(!inList);
      }
    } else {
      router.push("/login");
    }
  };
  return (
    <div className="md:flex">
      <img src={props.det.img} alt="charImage" className="rounded m-12 h-96" />
      <div className="m-12 text-white text-lg md:text-xl">
        <p className="m-3">Name : {props.det.name}</p>
        <p className="m-3">Birthday : {props.det.birthday}</p>
        <p className="m-3">Occupaion : {props.det.occupation}</p>
        <p className="m-3">Status : {props.det.status}</p>
        <p className="m-3">Nickname : {props.det.nickname}</p>
        <p className="m-3">Portrayed : {props.det.portrayed}</p>
        <p className="m-3">Appeared in seasons : {props.det.appearance}</p>
        <p className="m-3">Category: {props.det.category}</p>
        {inList && (
          <button onClick={favChar} className="bg-[#FF0266] rounded p-1 m-3">
            Remove from Favourites
          </button>
        )}
        {inList || (
          <button onClick={favChar} className="bg-white text-black rounded p-1 m-3">
            Add to Favourites ❤️
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
