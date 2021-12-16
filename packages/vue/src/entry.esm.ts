import _Vue, { PluginObject } from 'vue';

// Import vue component
import component from './emo.vue';

// Define typescript interfaces for installable component
type InstallableComponent = typeof component & PluginObject<any>;

export default /* #__PURE__ */ ((): InstallableComponent => {
  const installable = component as unknown as InstallableComponent;

  installable.install = (Vue: typeof _Vue): void => {
    Vue.component('Emo', installable);
  };
  return installable;
})();
