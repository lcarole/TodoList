import { cart, cartOutline, personOutline } from "ionicons/icons";

interface Element {
    icon: string;
    image: string;
}

const listElement: Element[] = [
    {
        icon: personOutline,
        image: "https://png.pngtree.com/png-vector/20221004/ourmid/pngtree-apple-macbook-pro-mockup-png-image_6277127.png"
    },
    {
        icon: cartOutline,
        image: "https://medias.maisonsdumonde.com/images/f_auto,q_auto,w_732/v1/mkp/M23092229_1/panier-de-rangement-avec-poignees-en-paille-tressee-33x33x28cm.jpg"
    }
]

export default listElement;