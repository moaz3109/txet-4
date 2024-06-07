const suras = [
    "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", 
    "الأعراف", "الأنفال", "التوبة", "يونس", "هود", "يوسف", 
    "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", 
    "مريم", "طه", "الأنبياء", "الحج", "المؤمنون", "النور", 
    "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم", 
    "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", 
    "الصافات", "ص", "الزمر", "غافر", "فصلت", "الشورى", 
    "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", 
    "الحجرات", "ق", "الذاريات", "الطور", "النجم", "القمر", 
    "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة", 
    "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", 
    "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", 
    "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", 
    "النازعات", "عبس", "التكوير", "الإنفطار", "المطففين", "الإنشقاق", 
    "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد", 
    "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", 
    "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", 
    "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", 
    "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"
];

window.onload = function() {
    var suraSelect = document.getElementById('sura');
    for (var i = 0; i < suras.length; i++) {
        var option = document.createElement('option');
        option.value = (i + 1).toString().padStart(3, '0');
        option.textContent = suras[i];
        suraSelect.appendChild(option);
    }
};

document.getElementById('play').addEventListener('click', function() {
    var reciter = document.getElementById('reciter').value;
    var sura = document.getElementById('sura').value;
    var audioPlayer = document.getElementById('audioPlayer');
    
    // استبدال "https://www.example.com" بموقع حقيقي لاستضافة الملفات الصوتية
    var baseUrl = 'https://www.example.com/audio/';
    var audioSrc = baseUrl + reciter + '/' + sura + '.mp3';
    audioPlayer.src = audioSrc;
    audioPlayer.load(); // تحميل الملف الصوتي
    audioPlayer.play();
});
