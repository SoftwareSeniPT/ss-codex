export const prettyDate: (string) => string = (time: string) => {
    const date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
        diff = (((new Date()).getTime() - date.getTime()) / 1000),
        dayDiff = Math.floor(diff / 86400);

    if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
        return;
    }

    return dayDiff === 0 && (
        diff < 60 && "Baru saja" ||
        diff < 120 && "1 menit yang lalu" ||
        diff < 3600 && Math.floor(diff / 60) + " menit yang lalu" ||
        diff < 7200 && "1 jam yang lalu" ||
        diff < 86400 && Math.floor(diff / 3600) + " jam yang lalu") ||
        dayDiff === 1 && "Kemarin" ||
        dayDiff < 7 && dayDiff + " hari yang lalu" ||
        dayDiff < 31 && Math.ceil(dayDiff / 7) + " minggu yang lalu";
};
