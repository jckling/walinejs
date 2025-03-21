import { defineComponent, h, resolveComponent } from 'vue';
import HopeHomePage from 'vuepress-theme-hope/components/HomePage.js';
import WalineTips from './WalineTips.js';

import { useDarkMode } from '@theme-hope/modules/outlook/composables/index';

import type { VNode } from 'vue';

export default defineComponent({
  name: 'HopePage',

  setup() {
    const { isDarkMode } = useDarkMode();

    return (): VNode =>
      h(
        HopeHomePage,
        {},
        {
          bottom: () => [
            h(WalineTips),
            h(
              h(resolveComponent('CommentService'), {
                darkmode: isDarkMode.value,
              }),
            ),
          ],
        },
      );
  },
});
