import "./Player.css";
import { useCallback, useEffect, useRef } from "react";
import Mp4Player from "@ezuikit/player-mp4";

function Player() {
  /** @type {React.MutableRefObject<Mp4Player>} */
  const playerRef = useRef();
  const urlRef = useRef();
  const containerRef = useRef();
  const volumeRef = useRef();

  useEffect(() => {
    volumeRef.current.addEventListener("blur", (e) => {
      if (playerRef.current) {
        let value = (e.target.value || "").trim();
        if (value === "") {
          console.error("音量为空");
          return;
        }
        value = Number(value);
        if (value > 1 || value < 0) {
          console.error("音量设置错误， 取值范围在[0,1]");
          return;
        }

        value = parseInt((value * 100 + "").split(".")[0]) / 100; // 不使用 toFixed 是为了避免四舍五入问题
        playerRef.current.setVolume(value);
      } else {
        console.log("player 未初始化");
      }
    });
  }, []);

  const createPlayer = () => {
    const url = urlRef.current.value;
    if (!playerRef.current) {
      // 默认没有声音， 浏览器的限制， 用户自动触发
      playerRef.current = new Mp4Player({
        id: "player-container",
        url,
      });

      window.player = playerRef.current;
    }
  };

  const handleInit = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }
    createPlayer();
  }, []);

  const handlePlay = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  }, []);

  const handlePause = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.pause();
    }
  }, []);

  const handleDestroy = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.fullscreen();
    }
  }, []);

  const handleExitFullscreen = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.exitFullscreen();
    }
  }, []);

  const handleGetVersion = useCallback(() => {
    if (playerRef.current) {
      console.log(playerRef.current.getVersion());
    }
  }, []);

  return (
    <div>
      <div id="player-container" ref={containerRef}></div>
      <div>
        <div>
          <input
            style={{ width: 600 }}
            placeholder="输入播放地址"
            ref={urlRef}
            defaultValue="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          />
        </div>
        <div>
          <button onClick={handleInit}>初始化</button>
          <button onClick={handlePlay}>播放</button>
          <button onClick={handlePause}>暂停</button>
          <button onClick={handleFullscreen}>开启全屏</button>
          <button onClick={handleExitFullscreen}>取消全屏（ESC）</button>
          <button onClick={handleGetVersion}>获取版本</button>
          <button onClick={handleDestroy}>销毁</button>
        </div>
        <div>
          音量：
          <input ref={volumeRef} placeholder="0-1" />
        </div>
      </div>
    </div>
  );
}

export default Player;
