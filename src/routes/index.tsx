import {  type DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import FirstSection from "~/components/Home/first-section";
import SecondSection from "../components/Home/second-section"
export default component$(() => {
  return (
    <>
      <FirstSection />
      <SecondSection />
    </>
  )
})
export const head: DocumentHead = {
  title: "Henri ist 2d",
  meta: [
    {
      name: "description",
      content: "Hier werden aktuelle News von Mainz und der Umgebung veröffentlicht. Dabei soll die Website perfekt für Anwohner sein, sie bietet verschiedenen möglichkeiten sich zu vernutzen u.a."
    }
  ]
}
