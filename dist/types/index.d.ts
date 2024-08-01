import BasePlayer, { BasePlayerOptions } from '@ezuikit/player-base';

interface Mp4PlayerOptions extends BasePlayerOptions {
    /** 类名前缀 默认 ez-mp4 */
    /** 禁用video 右键菜单 默认： true */
    disableContextmenu: boolean;
    /** 控件 默认不展示 */
    controls: boolean;
    loop: boolean;
}
/**
 * @class Mp4Player
 * @description Mp4Player
 *
 * @example
 * ```ts
 * const player = new Mp4Player({
 *   id: "id",
 *   width: 100,
 *   height: 100,
 *   url: "https://oss-cn-shanghai.aliyuncs.com/0_2024-02-27-15.mp4"
 * });
 * ```
 */
declare class Mp4Player extends BasePlayer {
    /**
     * 获取版本号
     * @example
     * ```ts
     * Mp4Player.version
     * ```
     */
    static version: string;
    private readonly _videoClassName;
    $video: HTMLVideoElement;
    private _volume;
    name: string;
    private readonly _containerClassName;
    /**
     * @description 构造函数
     * @param {Mp4PlayerOptions} options
     */
    constructor(options?: Partial<Mp4PlayerOptions>);
    /**
     * @description 播放
     * @param {string} url 新的播放地址
     * @returns {Promise<void>}
     */
    play(url?: string): Promise<void>;
    /**
     * @description 暂停
     * @returns {void}
     * @example
     * ```ts
     * player.pause()
     * ```
     */
    pause(): void;
    private _pause;
    /**
     * @description 设置音量 [0.0 ~ 1.0]
     * @param volume
     * @example
     * ```ts
     * player.setVolume(0.8)
     * ```
     */
    setVolume(volume: number): void;
    /** 播放中 */
    get playing(): boolean;
    /**
     * @description 获取音量
     * @example
     * ```ts
     * player.volume  // return number
     * ```
     */
    get volume(): number;
    /**
     * @description 设置音量 [0.0 ~ 1.0]
     * @example
     * ```ts
     * player.volume = 0.8
     * ```
     */
    set volume(volume: number);
    get currentTime(): number;
    set currentTime(time: number);
    get duration(): number;
    /**
     * @description 渲染 UI
     */
    private _render;
    /**
     * @description 事件注册（不会包括所有事件，没有的事件可以使用 this.$video.addEventListener）https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/abort_event
     */
    private _registerEvent;
    /**
     * @description 销毁
     */
    destroy(): void;
    /**
     * @description 获取版本号
     * @returns {string}
     */
    getVersion(): string;
    /**
     * @description 静态方法 判断是否支持播放地址
     * @param {Object} options
     * @returns {boolean} true：支持， false: 不支持
     * @example
     * ```ts
     * Mp4Player.supportType({url: "xxxxx.mp4"})
     * ```
     */
    static supportType(options: any): boolean;
}

export { type Mp4PlayerOptions, Mp4Player as default };
