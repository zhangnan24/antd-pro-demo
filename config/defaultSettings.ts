import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  primaryColor: '#F5222D',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  splitMenus: false,
  colorWeak: false,
  title: '数据分析中心',
  pwa: false,
  iconfontUrl: '',
};

export default Settings;