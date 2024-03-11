'use client';

import { Provider } from "react-redux";
import store from "./redux/store";
import Page from "./Home/page";

export default function Home() {
  return (
    <Provider store={store}>
<Page></Page>
</Provider>
  );
}