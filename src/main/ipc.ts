import { Menu, app, ipcMain, shell } from 'electron';
import { ipcChannels } from '../config/ipc-channels';
import { SettingsType } from '../config/settings';
import { serializeMenu, triggerMenuItemById } from './menu';
import { rendererPaths } from './paths';
import sounds from './sounds';
import { idle } from './startup';
import { getAppMessages, getSettings, setSettings } from './store';

export default {
	initialize() {
		// These send data back to the renderer process
		ipcMain.handle(ipcChannels.GET_APP_NAME, () => app.getName());
		ipcMain.handle(ipcChannels.GET_APP_MENU, () =>
			serializeMenu(Menu.getApplicationMenu()),
		);
		ipcMain.handle(ipcChannels.GET_APP_PATHS, () => {
			return rendererPaths;
		});
		ipcMain.handle(ipcChannels.GET_SETTINGS, getSettings);
		ipcMain.handle(ipcChannels.GET_MESSAGES, getAppMessages);

		// These do not send data back to the renderer process
		ipcMain.on(ipcChannels.RENDERER_READY, () => {
			sounds.play('STARTUP');
			idle();
		});

		ipcMain.on(
			ipcChannels.SET_SETTINGS,
			(_event, settings: Partial<SettingsType>) => {
				setSettings(settings);
			},
		);

		// Trigger an app menu item by its id
		ipcMain.on(
			ipcChannels.TRIGGER_APP_MENU_ITEM_BY_ID,
			(_event: any, id: string) => {
				triggerMenuItemById(Menu.getApplicationMenu(), id);
			},
		);

		// Open a URL in the default browser
		ipcMain.on(ipcChannels.OPEN_URL, (_event: any, url: string) => {
			shell.openExternal(url);
		});
	},
};
