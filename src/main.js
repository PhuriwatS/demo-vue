import { createApp } from "vue";

import App from "./App.vue";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

const app = createApp(App);

app.component("component-a", ComponentA);
app.component("component-b", ComponentB);
app.component("friend-contact", FriendContact);
app.component("new-friend", NewFriend);

app.mount("#app");
