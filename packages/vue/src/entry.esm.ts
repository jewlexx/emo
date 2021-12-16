import _Vue, { PluginObject } from 'vue';

import component from './emo.vue';

type InstallableComponent = typeof component & PluginObject<any>;

export default /*#__PURE__*/ ((): InstallableComponent => {
  const installable = component as unknown as InstallableComponent;

  installable.install = (Vue: typeof _Vue) => {
    Vue.component('Emo', installable);
  };
  return installable;
})();
