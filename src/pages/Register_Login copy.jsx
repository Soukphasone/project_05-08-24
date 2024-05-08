import React from "react";
import { useState } from 'react';
// import "./css1.css";
function Register_Login() {
    const [activeTab, setActiveTab] = useState('login');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
    <div>
      <body className="overflow-x-hidden overflow-y-auto text-primary">
        <div data-v-app="">
          <div
            className="nuxt-loading-indicator"
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              left: "0px",
              pointerEvents: "none",
              width: "auto",
              height: "3px",
              opacity: "0",
              background: "var(--primary)",
              transform: "scaleX(0)",
              transformOrigin: "left center 0px",
              transition: "transform 0.1s, height 0.4s, opacity 0.4s",
              zIndex: "999999",
            }}
          ></div>
          <div data-v-19df7d63="">
            <header data-v-19df7d63="" className="w-full z-10">
              <div data-v-19df7d63="" className="w-full mx-auto"></div>
            </header>
            <main data-v-19df7d63="" className="min-h-screen">
              <div data-v-19df7d63="" className="w-full mx-auto">
                <main
                  data-v-d8556cff=""
                  className="bg-login-wrapper bg-login-wrapper"
                >
                  <div
                    data-v-d8556cff=""
                    className="flex flex-col items-center justify-start min-h-screen relative overflow-hidden bg-wrapper px-4 pt-12 md:pt-24"
                  >
                    <img
                      data-v-d8556cff=""
                      className="h-30 my-8 w-auto z-20 mx-auto cursor-pointer"
                      src="https://d29xpgmn3rqne6.cloudfront.net/lucabet88/other/1674807129586"
                      alt="center menu"
                    />
                    <div
                      data-v-d8556cff=""
                      className="w-full max-w-[500px] bg-card-primary mb-24 border-0 rounded-base mx-auto px-4 py-2"
                    >
                      <div data-v-d8556cff="" className="mt-0">
                        <div data-v-d8556cff="" className="">
                          <div
                            data-v-d8556cff=""
                            className="w-full flex flex-col items-center justify-center"
                          >
                            <div
                              data-v-ea58f736=""
                              data-v-d8556cff=""
                              id="auth-advance-tab"
                              className="w-full"
                            >
                              <div
                                data-v-ea58f736=""
                                className="tabsWrapper w-full"
                              >
                                <div
                                  data-v-ea58f736=""
                                  className="tabs relative flex items-center justify-center tab-secondary w-full"
                                >
                                  <div
                                    data-v-ea58f736=""
                                    className="w-full absolute bottom-0 left-0 rounded-full slide auth-advance-tab btn-register active"
                                    style={{ width: "234px", left: activeTab === "login" ? "0px" : "270px" }}
                                  ></div>
                                  <div
                                    data-v-ea58f736=""
                                    className="w-full absolute bottom-0 left-0 rounded-full slide-border auth-advance-tab"
                                  ></div>
                                  <div
                                  onClick={() => handleTabClick('login')}
                                    data-v-ea58f736=""
                                    id="auth-advance-tab"
                                    className="tabslinks relative cursor-pointer flex items-center justify-center login w-full active"
                                  >
                                    <span
                                      data-v-ea58f736=""
                                      className="font-normal <sm:text-base sm:text-base md:text-lg"
                                    >
                                      เข้าสู่ระบบ
                                    </span>
                                  </div>
                                  <div
                                   onClick={() => handleTabClick('register')}
                                    data-v-ea58f736=""
                                    id="auth-advance-tab"
                                    className="tabslinks relative cursor-pointer flex items-center justify-center btn-register w-full"
                                  >
                                    <span
                                      data-v-ea58f736=""
                                      className="font-normal <sm:text-base sm:text-base md:text-lg"
                                    >
                                      สมัครสมาชิก
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>         
                            {activeTab === 'login'?(<div data-v-d8556cff="" className="w-full mt-4">
                              <form
                                data-v-d8556cff=""
                                className="flex flex-col mt-3"
                              >
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    บัญชีผู้ใช้ หรือ เบอร์โทรศัพท์
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="text"
                                      placeholder="กรอกชื่อผู้ใช้ หรือ เบอร์โทรศัพท์"
                                      autocomplete="off"
                                    />
                                  </div>
                                </div>
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    รหัสผ่าน
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="password"
                                      placeholder="รหัสผ่าน / PIN"
                                      autocomplete="off"
                                    />
                                  </div>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input"
                                  >
                                   <button
                                    data-v-9dec3a92=""
                                    data-v-d8556cff=""
                                    id="btn01"
                                    type="submit"
                                    className="base-button"
                                  >
                                    <div
                                      data-v-9dec3a92=""
                                      className="flex justify-center items-center"
                                    >
                                      <span
                                        data-v-d8556cff=""
                                        className="text-[var(--btn-login)]"
                                      >
                                        เข้าสู่ระบบ
                                      </span>
                                    </div>
                                  </button>
                                  </div>
                                  
                                </div>
                              </form>
                            </div>):( <div data-v-d8556cff="" className="w-full mt-4">
                              <form
                                data-v-d8556cff=""
                                className="flex flex-col mt-3"
                              >
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    บัญชีผู้ใช้ หรือ เบอร์โทรศัพท์
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="text"
                                      placeholder="กรอกชื่อผู้ใช้ หรือ เบอร์โทรศัพท์"
                                      autocomplete="off"
                                    />
                                  </div>
                                </div>
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    รหัสผ่าน
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="text"
                                      placeholder="กรอกชื่อผู้ใช้ หรือ เบอร์โทรศัพท์"
                                      autocomplete="off"
                                    />
                                  </div>
                                </div>
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    ชื่อ
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="text"
                                      placeholder="กรอกชื่อผู้ใช้ หรือ เบอร์โทรศัพท์"
                                      autocomplete="off"
                                    />
                                  </div>
                                </div>
                                <div
                                  data-v-d8556cff=""
                                  className="login-input-wrapper w-full text-[var(--primary)] w-full rounded-[10px] mb-2"
                                >
                                  <h5
                                    data-v-d8556cff=""
                                    className="text-sm mb-2 text-primary"
                                  >
                                    นามสกุล
                                  </h5>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input"
                                  >
                                    <input
                                      data-v-d8556cff=""
                                      className="w-full h-full text-base text-primary outline-none placeholder-[var(--input-placeholder)]"
                                      type="password"
                                      placeholder="รหัสผ่าน / PIN"
                                      autocomplete="off"
                                    />
                                  </div>
                                  <div
                                    data-v-d8556cff=""
                                    className="main-input"
                                  >
                                   <button
                                    data-v-9dec3a92=""
                                    data-v-d8556cff=""
                                    id="btn01"
                                    type="submit"
                                    className="base-button"
                                  >
                                    <div
                                      data-v-9dec3a92=""
                                      className="flex justify-center items-center"
                                    >
                                      <span
                                        data-v-d8556cff=""
                                        className="text-[var(--btn-login)]"
                                      >
                                        ถัดไป
                                      </span>
                                    </div>
                                  </button>
                                  </div>
                                </div>
                              </form>
                            </div>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </main>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Register_Login;
