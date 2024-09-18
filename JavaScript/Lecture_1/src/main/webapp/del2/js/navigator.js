"use strict";

/**
 * Koden er laget for å funger også i eldre nettlesere. Idag vil vi bruke mer
 * moderne strukterer, men da vil koden feile i eldre nettlesere.
 */

{
   function show(value) {
        if (value == null) {
            return "undefined";
        } else {
           if (typeof value == "string") {
               if (value.trim() == "") {
                   return "<tom streng>";
               } else {
                   return value;
               }
           } else {
               return value;
           }
        }
    }

//.toString().trim() == "") {
    function init() {
        document.getElementById("appCodeName").textContent = show(navigator.appCodeName);
        document.getElementById("appMinorVersion").textContent = show(navigator.appMinorVersion);
        document.getElementById("appName").textContent = show(navigator.appName);
        document.getElementById("appVersion").textContent = show(navigator.appVersion);
        document.getElementById("battery").textContent = show(navigator.battery);
        document.getElementById("browserLanguage").textContent = show(navigator.browserLanguage);
        document.getElementById("buildID").textContent = show(navigator.buildID);
        document.getElementById("cookieEnabled").textContent = show(navigator.cookieEnabled);
        document.getElementById("cpuClass").textContent = show(navigator.cpuClass);
        document.getElementById("connection").textContent = show(navigator.connection);
        document.getElementById("deviceMemory").textContent = show(navigator.deviceMemory);
        document.getElementById("doNotTrack").textContent = show(navigator.doNotTrack);
        document.getElementById("geolocation").textContent = show(navigator.geolocation);
        document.getElementById("credentials").textContent = show(navigator.credentials);
        document.getElementById("hardwareConcurrency").textContent = show(navigator.hardwareConcurrency);
        document.getElementById("javaEnabled").textContent = show(navigator.javaEnabled());
        document.getElementById("keyboard").textContent = show(navigator.keyboard);
        document.getElementById("languages").textContent = show(navigator.languages);
        document.getElementById("language").textContent = show(navigator.language);
        document.getElementById("locks").textContent = show(navigator.locks);
        document.getElementById("mediaCapabilities").textContent = show(navigator.mediaCapabilities);
        document.getElementById("mediaDevices").textContent = show(navigator.mediaDevices);
        document.getElementById("mimeTypes").textContent = show(navigator.mimeTypes);
        document.getElementById("onLine").textContent = show(navigator.onLine);
        document.getElementById("oscpu").textContent = show(navigator.oscpu);
        document.getElementById("pdfViewerEnabled").textContent = show(navigator.pdfViewerEnabled);
        document.getElementById("permissions").textContent = show(navigator.permissions);
        document.getElementById("platform").textContent = show(navigator.platform);
        document.getElementById("plugins").textContent = show(navigator.plugins);
        document.getElementById("presentation").textContent = show(navigator.presentation);
        document.getElementById("product").textContent = show(navigator.product);
        document.getElementById("productSub").textContent = show(navigator.productSub);
        document.getElementById("serviceWorker").textContent = show(navigator.serviceWorker);
        document.getElementById("storageQuota").textContent = show(navigator.storageQuota);
        document.getElementById("storage").textContent = show(navigator.storage);
        document.getElementById("systemLanguage").textContent = show(navigator.systemLanguage);
        document.getElementById("userActivation").textContent = show(navigator.userActivation);
        document.getElementById("userAgent").textContent = show(navigator.userAgent);
        document.getElementById("userAgentData").textContent = show(navigator.userAgentData);        
        document.getElementById("vendor").textContent = show(navigator.vendor);
        document.getElementById("vendorSub").textContent = show(navigator.vendorSub);
        document.getElementById("webdriver").textContent = show(navigator.webdriver);
        document.getElementById("webkitPointer").textContent = show(navigator.webkitPointer);
        document.getElementById("xr").textContent = show(navigator.xr);
    }


    function compare() {
        let mis = 0;
//        const current = document.querySelectorAll("*[id]");
        //       console.log(current.length)
        const divs = document.getElementsByTagName("div");
        for (const div of divs) {
            const olds=div.querySelectorAll("*[data-s]");
            if (olds.length > 1) {
                console.log("Something is wrong");
                return;
            } else if (olds.length == 1) {
                const newelm = div.querySelector("*[id]");
                const old = olds[0].nextElementSibling;
//                old.classList.add("mismatch");

                if (newelm.textContent != old.textContent)  {
//                    console.log(` ${newelm.textContent}:${old.textContent}`);
                    newelm.classList.add("mismatch");
                    ++mis;
                }
            }
        }
//        console.log(divs.length);

//        const old = document.querySelectorAll("*[data-s]");
//        console.log(old.length);
//        for (elm in old) {
//            console.log(elm.parent
 //       }
        console.log(`Found ${mis} mismatches`);
    }

    document.addEventListener('DOMContentLoaded',init);
    // document.addEventListener('DOMContentLoaded',compare);
}
