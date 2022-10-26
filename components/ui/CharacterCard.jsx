import { HeartIcon } from "@heroicons/react/outline";
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "../../src/firebase-config";
import { useAuth } from "../Auth/AuthContext";

const CharacterCard = (props) => {
  const [inList, setInList] = useState(false);
  const router = useRouter();
  const { user } = useAuth();
  const showCharDetail = () => {
    router.push(`/characters/${props.char_id}`);
  };
  if (user) {
    const getData = async () => {
      const userSnap = await getDoc(doc(db, "users", user.uid));
      if (!userSnap.data()) {
        await setDoc(doc(db, "users", user.uid), { fav: [] });
      }
      setInList(userSnap.data()?.fav.includes(props.char_id));
    };
    getData();
  }
  const favChar = async () => {
    if (user) {
      if (inList) {
        await updateDoc(doc(db, "users", user.uid), {
          fav: arrayRemove(props.char_id),
        });
        setInList(!inList);
      } else {
        await updateDoc(doc(db, "users", user.uid), {
          fav: arrayUnion(props.char_id),
        });
        setInList(!inList);
      }
    } else {
      router.push("/login");
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="rounded bg-[#016936] m-5 w-fit text-black ">
        <img
          src={props.img}
          alt="bbimage"
          className="h-64 rounded-t cursor-pointer"
          onClick={showCharDetail}
        />
        <div className="flex justify-between">
          <h1 className="my-2.5 mx-2 cursor-pointer" onClick={showCharDetail}>
            {props.name}
          </h1>
          {inList ? (
            <HeartIcon
              className="cursor-pointer h-6 w-6 m-2 p-0.5 bg-[#FF0266] text-gray-900 rounded-xl "
              onClick={favChar}
            />
          ) : (
            <HeartIcon
              className="cursor-pointer h-6 w-6 m-2 p-0.5 bg-white text-gray-600 rounded-xl "
              onClick={favChar}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
