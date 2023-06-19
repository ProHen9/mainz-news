import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./first-section.css?inline"
export default component$(() => {
    useStyles$(styles)
    return (
        <div class="container">
            <h2>Hey ✌️, Willkommen auf mainz.news!</h2>
            <p>Infos aus Mainz und aus der Umgbung</p>
        </div>
    )
})