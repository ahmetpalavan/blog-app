
## Blog Uygulaması

Blog Uygulaması, kullanıcıların blog yazıları oluşturmasına, yayınlamasına ve paylaşmasına olanak tanıyan bir web uygulamasıdır.

### Özellikler

- **Kullanıcı Hesapları:** Kullanıcılar kayıt olabilir, oturum açabilir ve hesaplarına erişebilirler.
- **Blog Yazısı Oluşturma:** Kullanıcılar blog yazıları oluşturabilir, düzenleyebilir ve yayınlayabilirler.
- **Blog Yazısı Paylaşma:** Kullanıcılar blog yazılarını sosyal medya üzerinde paylaşabilirler.
- **Yorumlar:** Kullanıcılar blog yazılarına yorum yapabilirler.
- **Etiketler:** Blog yazıları etiketlerle kategorize edilebilir ve aranabilir hale getirilebilir.
- **Yazar Profili:** Kullanıcılar kendi profil bilgilerini düzenleyebilir ve blog yazılarına yazar bilgilerini ekleyebilirler.

### Kullanılan Teknolojiler

Blog Uygulaması aşağıdaki teknolojileri kullanır:

- **Next.js:** React tabanlı bir web uygulama çatısı.
- **NextAuth.js:** Node.js tabanlı web uygulamaları için kullanılabilen bir kimlik doğrulama çerçevesidir.
- **Firebase Firestore:** Bulut tabanlı NoSQL veritabanı kullanarak blog yazıları, kullanıcı hesapları ve diğer verileri depolar.
- **Firebase Authentication:** Kullanıcı kimlik doğrulama ve yönetimi için kullanılan bir araç.
- **Tailwind CSS:** Önceden oluşturulmuş CSS stilleri ve komutları içeren bir CSS çerçevesi.

### Nasıl Kullanılır?

Blog Uygulaması'nı kullanmak için aşağıdaki adımları izleyebilirsiniz:

1. Proje deposunu klonlayın: `git clone https://github.com/ahmetpalavan/blog-app.git`
2. Proje klasörüne gidin: `cd blog-app`
3. Gerekli paketleri yükleyin: `npm install`
4. Firebase projenizi oluşturun ve Firestore ve Authentication hizmetlerini etkinleştirin.
5. Firebase yapılandırma bilgilerinizi `src/firebase.js` dosyasında güncelleyin.
6. Geliştirme sunucusunu başlatın: `npm run dev`

Uygulama, geliştirme sunucusu başlatıldıktan sonra yerelde çalışmaya başlayacaktır.

