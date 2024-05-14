function ShareLink({closeModal }) {
    return (
      <div
        className="vfm vfm--fixed vfm--inset flex justify-center items-center dialog"
        onClick={(e) => {
          if (
            e.target.className ===
            "vfm vfm--fixed vfm--inset flex justify-center items-center dialog"
          ) {
            closeModal("close");
          }
        }}
        style={{ zIndex: 1000 }}
        role="dialog"
        aria-modal="true"
        id="cash-back-history-modal"
        title=""
      >
        <div
          class="vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none"
          aria-hidden="true"
        ></div>
        <div
          class="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
          tabindex="0"
        >
          <div data-v-e339f85c="">
            <div data-v-e339f85c="" class="text-center text-primary">
            ลิ้งค์แนะนำเพื่อน
            </div>
            <span class="text-active text-base font-medium">
              <div class="mt-[10px] w-full flex bg-[var(--card-secondary)] px-4 py-[11px] rounded-[10px]">
                <span class="text-sm text-left w-[60%] text-[var(--text-link)]">
                  ลิงก์ชวนเพื่อน
                </span>
                <div class="w-full flex items-center gap-x-4 justify-between">
                  <span class="text-primary text-left w-full max-w-40 truncate text-sm">
                    https://lucabet88.electrikora.com/?prefix=lucabet88&amp;action=register&amp;refer_code=8zejRe3U7A
                  </span>
                  <span class="nuxt-icon nuxt-icon--fill cursor-pointer text-[var(--primary)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_268_1612)">
                        <path
                          d="M11.4286 2.85712H1.71428C0.767511 2.85712 0 3.62463 0 4.5714V14.2857C0 15.2324 0.767511 16 1.71428 16H11.4286C12.3753 16 13.1428 15.2324 13.1428 14.2857V4.5714C13.1428 3.62463 12.3753 2.85712 11.4286 2.85712Z"
                          fill="var(--primary)"
                        ></path>
                        <path
                          d="M14.2856 1.10693e-09H3.99993C3.05828 -3.3481e-05 2.29288 0.759508 2.28564 1.70113C2.28564 1.70571 2.28564 1.7097 2.28564 1.71428H11.4285C13.0057 1.71616 14.2838 2.99424 14.2856 4.57141V13.7143C14.2902 13.7143 14.2942 13.7143 14.2988 13.7143C15.2404 13.707 16 12.9416 15.9999 12V1.71428C15.9999 0.767511 15.2324 1.10693e-09 14.2856 1.10693e-09Z"
                          fill="var(--primary)"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_268_1612">
                          <rect width="16" height="16" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </span>
          </div>
          </div>
        </div>
    );
  }
  
  export default ShareLink;
  