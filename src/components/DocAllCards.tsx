import React from "react";
import items from "../components/docs.json"
import { IonNavLink, IonRefresher, IonRefresherContent, RefresherEventDetail } from "@ionic/react";
import DocConst from "../components/DocConstructor";
import DocCardConst from "../components/DocCardCostructor";

const Example: React.FC = () => {
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            window.location.reload();
          event.detail.complete();
        }, 1000);
      }

    return (
        <>
            <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
              <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            {items.map((item, index) => (
                <IonNavLink
                    key={index}
                    routerDirection="forward"
                    component={() => (
                        <DocConst
                            buttonLink={item.buttonLink}
                            subtitle={item.subtitle}
                            isButton={item.isButton}
                            type={item.type}
                            title={item.title}
                            content={item.content}
                        />
                    )}
                >
                    <DocCardConst
                        title={item.title}
                        content={item.content}
                        subtitle={item.subtitle}
                    />
                </IonNavLink>
            ))}
        </>
    );
};

export default Example;