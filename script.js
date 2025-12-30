function copyIP() {
    const ip = document.getElementById("ip").innerText;
    navigator.clipboard.writeText(ip).then(() => {
        alert("Minecraft IP copied: " + ip);
    });
}
