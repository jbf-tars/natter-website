import { release } from "../data/release";

type Platform = "mac" | "windows" | "mobile" | "unknown";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";

  const ua = navigator.userAgent.toLowerCase();

  // Check mobile first
  if (/android|iphone|ipad|ipod|mobile/.test(ua)) return "mobile";

  // Use userAgentData if available (modern Chromium browsers)
  if ("userAgentData" in navigator) {
    const uaData = (navigator as any).userAgentData;
    if (uaData?.platform) {
      const platform = uaData.platform.toLowerCase();
      if (platform === "macos") return "mac";
      if (platform === "windows") return "windows";
    }
  }

  // Fallback to userAgent string
  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "windows";

  return "unknown";
}

export function initDownloadButtons() {
  const platform = detectPlatform();
  const buttons = document.querySelectorAll<HTMLAnchorElement>("[data-download-btn]");
  const altLinks = document.querySelectorAll<HTMLElement>("[data-download-alt]");
  const mobileMessages = document.querySelectorAll<HTMLElement>("[data-mobile-msg]");

  buttons.forEach((btn) => {
    if (platform === "mobile") {
      btn.style.display = "none";
      return;
    }

    if (platform === "mac") {
      btn.textContent = "Download for macOS — Free";
      btn.href = release.macUrl;
    } else if (platform === "windows") {
      btn.textContent = "Download for Windows — Free";
      btn.href = release.winUrl;
    } else {
      btn.textContent = "Download — Free";
      btn.href = release.macUrl;
    }
  });

  altLinks.forEach((link) => {
    if (platform === "mobile" || platform === "unknown") {
      link.style.display = "none";
      return;
    }

    if (platform === "mac") {
      link.innerHTML = `Also available for <a href="${release.winUrl}" class="underline hover:text-text transition-colors">Windows</a>`;
    } else {
      link.innerHTML = `Also available for <a href="${release.macUrl}" class="underline hover:text-text transition-colors">macOS</a>`;
    }
  });

  mobileMessages.forEach((el) => {
    if (platform === "mobile") {
      el.style.display = "block";
    }
  });
}
