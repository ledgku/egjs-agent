const AGENT_DATA_LIST = [
    {
        name: "Mac && Chrome 87",
        platform: "MacIntel",
        osData: {
            architecture: "",
            model: "",
            platform: "Mac OS X",
            platformVersion: "10_15_4",
            uaFullVersion: "87.0.4244.0",
        },
        userAgentData: {
            brands: [
                { brand: "Google Chrome", version: "87" },
                { brand: `"Not;A\\Brand`, version: "99" },
                { brand: "Chromium", version: "87" },
            ],
            mobile: false,
            platform: "macOS",
        },
        result: {
            os: {
                name: "mac",
                version: "-1",
            },
            browser: {
                name: "chrome",
                version: "87",
                chromium: true,
                webkit: false,
                chromiumVersion: "87",
                webkitVersion: "-1",
            },
            isMobile: false,
        },
        accurateResult: {
            os: {
                name: "mac",
                version: "10.15.4",
            },
            browser: {
                version: "87.0.4244.0",
            },
        },
    },
    {
        name: "Mac && Whale 27 && Chromium 83",
        platform: "MacIntel",
        osData: {
            architecture: "Intel",
            model: "",
            platform: "Mac OS X",
            platformVersion: "10_15_4",
            uaFullVersion: "2.8.105.22",
        },
        userAgentData: {
            uaList: [
                { brand: "Whale", version: "2" },
            ],
            mobile: false,
            platform: "macOS",
        },
        result: {
            os: {
                name: "mac",
                version: "-1",
            },
            browser: {
                name: "whale",
                version: "2",
                chromium: true,
                webkit: false,
                chromiumVersion: "-1",
                webkitVersion: "-1",
            },
            isMobile: false,
        },
        accurateResult: {
            os: {
                name: "mac",
                version: "10.15.4",
            },
            browser: {
                version: "2.8.105.22",
            },
        },
    },
    {
        name: "Galaxy S5 && Chrome 87",
        platform: "Linux armv81",
        osData: {
            architecture: "",
            model: "SM-G900P",
            platform: "Android",
            platformVersion: "5.0",
            uaFullVersion: "87.0.0.0",
        },
        userAgentData: {
            brands: [
                { brand: "Google Chrome", version: "87" },
                { brand: `"Not;A\\Brand`, version: "99" },
                { brand: "Chromium", version: "87" },
            ],
            mobile: true,
            platform: "Android",
        },
        result: {
            os: {
                name: "android",
                version: "-1",
            },
            browser: {
                name: "chrome",
                version: "87",
                chromium: true,
                webkit: false,
                chromiumVersion: "87",
                webkitVersion: "-1",
            },
            isMobile: true,
        },
        accurateResult: {
            os: {
                name: "android",
                version: "5.0",
            },
            browser: {
                version: "87.0.0.0",
            },
        },
    },
    {
        name: "Galaxy S5 && Chrome 87 (platform: Linux armv81)",
        platform: "Linux armv81",
        osData: {
            architecture: "",
            model: "SM-G900P",
            platform: "Android",
            platformVersion: "5.0",
            uaFullVersion: "87.0.0.0",
        },
        userAgentData: {
            brands: [
                { brand: "Google Chrome", version: "87" },
                { brand: `"Not;A\\Brand`, version: "99" },
                { brand: "Chromium", version: "87" },
            ],
            mobile: true,
            platform: "Android",
        },
        result: {
            os: {
                name: "android",
                version: "-1",
            },
            browser: {
                name: "chrome",
                version: "87",
                chromiumVersion: "87",
                chromium: true,
                webkit: false,
                webkitVersion: "-1",
            },
            isMobile: true,
        },
        accurateResult: {
            os: {
                name: "android",
                version: "5.0",
            },
            browser: {
                version: "87.0.0.0",
            },
        },
    },
    {
        name: "Mac & Safari (Imagination)",
        platform: "MacIntel",
        osData: {
            architecture: "",
            model: "",
            platform: "Mac OS X",
            platformVersion: "10_15_4",
            uaFullVersion: "13.1",
        },
        userAgentData: {
            brands: [
                { brand: "Safari", version: "13" },
                { brand: `"Not;A\\Brand`, version: "99" },
                { brand: "AppleWebKit", version: "605" },
            ],
            mobile: false,
            platform: "macOS",
        },
        result: {
            os: {
                name: "mac",
                version: "-1",
            },
            browser: {
                name: "safari",
                version: "13",
                chromium: false,
                chromiumVersion: "-1",
                webkit: true,
                webkitVersion: "605",
            },
            isMobile: false,
        },
        accurateResult: {
            os: {
                name: "mac",
                version: "10.15.4",
            },
            browser: {
                version: "13.1",
            },
        },
    },
    {
        name: "Chrome 100",
        platform: "Win32",
        osData: {
            architecture: "",
            model: "",
            platform: "windows",
            platformVersion: "10.0",
            uaFullVersion: "100.0.4664.45",
        },
        userAgentData: {
            brands: [
                { brand: "Google Chrome", version: "100" },
                { brand: `"Not;A\\Brand`, version: "99" },
                { brand: "Chromium", version: "100" },
            ],
            mobile: false,
            platform: "Windows",
        },
        result: {
            os: {
                name: "window",
                version: "-1",
            },
            browser: {
                name: "chrome",
                version: "100",
                chromiumVersion: "100",
                chromium: true,
                webkit: false,
                webkitVersion: "-1",
            },
            isMobile: false,
        },
        accurateResult: {
            os: {
                name: "window",
                version: "10.0",
            },
            browser: {
                version: "100.0.4664.45",
            },
        },
    },
];

export default AGENT_DATA_LIST;
