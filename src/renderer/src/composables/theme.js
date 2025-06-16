/*
 * @Author: cyy
 * @Date: 2025-03-11 16:03:34
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-14 15:07:46
 * @Description:
 */
export const useAppTheme = () => {
  return {
    components: {
      Menu: {
        controlHeightLG: 32,
        itemMarginInline: 0,
        radiusItem: 6
      },
      Tree: {
        colorBgContainer: '',
        controlHeightSM: 32,
      }
    },
    token: {
      colorPrimary: '#00b96b'
    }
  }
}
