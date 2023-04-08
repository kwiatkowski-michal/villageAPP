import React, { useEffect, useState } from "react";
import items from "../components/docs.json"
import { IonNavLink } from "@ionic/react";
import DocConst from "../components/DocConstructor";
import DocCardConst from "../components/DocCardCostructor";
import {supabase} from "../utils/supabase";
import { Database } from "../utils/types";

export default function GetDocs() {
    const [documents, setDocuments] = useState<Database['public']['Tables']['documents']['Row'][]>([]);
    useEffect(() => {
        async function fetchData() {
          const { data, error } = await supabase.from('documents').select('*').order('id', { ascending: false })
          if (error) {
            console.log(error);
          } else {
            setDocuments(data as Database['public']['Tables']['documents']['Row'][]);
            console.log(data);
          }
        }
        fetchData();
      }, []);

      return (
            <>
                {documents.map((document, index) => (
                    <IonNavLink
                        key={index}
                        routerDirection="forward"
                        component={() => (
                            <DocConst
                                dl_link={document.dl_link}
                                title={document.title}
                                description={document.description}
                            />
                        )}
                    >
                        <DocCardConst
                            title={document.title}
                            content={document.description}
                            created_at={document.created_at}
                        />
                    </IonNavLink>
                ))}
            </>
      )


}