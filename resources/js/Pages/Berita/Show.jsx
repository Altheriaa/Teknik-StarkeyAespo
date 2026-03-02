import HomeLayout from '../../Layouts/HomeLayout';
import { Link } from '@inertiajs/react';

export default function ShowBerita({ berita, previews}) {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const articleTitle = berita.title;

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' - ' + currentUrl)}`;
    const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(articleTitle)}`;

    const copyToClipboard = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(currentUrl);
            alert('Tautan halaman berhasil disalin!');
        }
    };

    return (
        <HomeLayout header="Berita">
            <div className="container py-5">
                <div className="row gx-5">
                    <div className="col-lg-8">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link href="/berita">Berita</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Detail Berita</li>
                        </ol>

                        {/* {{-- Judul Artikel --}} */}
                        <h1 className="fw-bolder mb-3">
                            {berita.title}
                        </h1>

                        {/* {{-- Metadata Artikel (Tanggal, Penulis, Views) --}} */}
                        <div className="d-flex flex-wrap align-items-center mb-4 article-meta gap-4">
                            {/* {{-- Anda mungkin butuh Font Awesome untuk ikon --}} */}
                            <span><i className="fas fa-calendar-alt">
                                </i> 
                                {new Date(berita.date).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                            <span><i className="fas fa-user-edit"></i>Ditulis oleh Administrator</span>
                            <span><i className="fas fa-eye"></i> Dilihat {berita.views} kali</span>
                        </div>

                        {/* {{-- Gambar Utama --}} */}
                        <img src={`/storage/${berita.image_news}`} className="img-fluid rounded mb-4 w-100"
                            alt={berita.slug} />

                        {/* {{-- Isi Artikel --}} */}
                        <div 
                            className="article-body" 
                            dangerouslySetInnerHTML={{ __html: berita.description }} 
                        />
                        {/* {{-- Kode lengkap untuk bagian share --}}  */}
                        <div className="mt-4">
                            <h5 className="mb-2">Bagikan Artikel Ini:</h5>
                            <button onClick={copyToClipboard} id="copy-link-btn" className="btn text-white me-2 mb-2"
                                style={{ backgroundColor: '#E4405F', border: 'none' }}>
                                <i className="fas fa-link"></i> Copy Link
                            </button>
                            <a href={facebookShareUrl} className="btn btn-primary me-2 mb-2" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href={twitterShareUrl} className="btn btn-info text-white me-2 mb-2" target="_blank"
                                rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a href={whatsappShareUrl} className="btn btn-success me-2 mb-2" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i> WhatsApp
                            </a>
                            <a href={linkedinShareUrl} className="btn btn-secondary me-2 mb-2" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* {{-- sidebar kanan --}} */}
                    <div className="col-lg-4">
                        <div className="card border-0" style={{ backgroundColor: '#f8f9fa' }}>
                            <div className="card-body">
                                <h4 className="fw-bold mb-4">Berita Terbaru</h4>
                                <div className="list-group list-group-flush">
                                    {previews.map((preview) => (
                                        <Link href={`/berita/${preview.slug}`} key={preview.id} className="list-group-item latest-post-item">
                                            <img className="img-fluid" src={`/storage/${preview.image_news}`} alt="Thumbnail" />
                                            <div>
                                                <h6 className="post-title mt-2">{preview.title}</h6>
                                                <small
                                                    className="text-muted d-block">{new Date(preview.date).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</small>
                                                <small className="text-muted d-block">Dilihat {preview.views} kali</small>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
