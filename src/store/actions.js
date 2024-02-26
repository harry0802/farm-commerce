export default {
  siderBarMenuInit() {
    return (this.siderBarMenu = true);
  },
  siderBarMenuNext() {
    return (this.siderBarMenu = false);
  },
  siderBarMenuPreviou() {
    return (this.siderBarMenu = true);
  },
  closeSiderBar() {
    return (this.toggleSiderBar = false);
  },
  changeSiderBar() {
    return (this.toggleSiderBar = !this.toggleSiderBar);
  },
};
