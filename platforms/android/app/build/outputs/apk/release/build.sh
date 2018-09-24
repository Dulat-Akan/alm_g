coderx password googlehack
android		android

cordova build --release android

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore android.keystore app-release-unsigned.apk android

//passw android

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1  -keystore android.keystore app-release-unsigned.apk android

sudo apt install zipalign

zipalign -v 4 app-release-unsigned.apk app-release.apk

sudo update-alternatives --config jarsigner


cordova run android

<widget id="kz.kazpoisk.kz" version="1.6.0"


adb devices
