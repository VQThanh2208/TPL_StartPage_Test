import './StartPage.css';

export default function StartPage() {
  return (
    <div className="start-page">
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="nav-logo">THE PHAN LEGACY</div>
        <nav className="nav-links">
          <a href="#tour">Tour</a>
          <a href="#history">Lịch Sử</a>
          <a href="#achievements">Thành Tích</a>
          <a href="#pov">POV</a>
        </nav>
      </header>

      {/* ===== KHUNG 1: HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-bg-image">
          <img 
            src="/IMG_9972.JPG" 
            alt="Toàn cảnh Tượng Cụ Phan Bội Châu và sân trường" 
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              const sources = ['/IMG_9972.jpg', '/tuong-phan.jpg', '/tuong phan.jpg'];
              const step = parseInt(img.dataset.step || '0', 10);
              if (step < sources.length) {
                img.dataset.step = (step + 1).toString();
                img.src = sources[step];
              }
            }}
          />
        </div>

        <div className="hero-gradient-overlay"></div>

        <div className="hero-content">
          <span className="subtitle-tag">DIGITAL HERITAGE PROJECT</span>
          <h1 className="hero-title">
            THE <br />
            <span className="highlight-red-italic">PHAN</span> <br />
            <span className="highlight-green">LEGACY</span>
          </h1>
          <p className="hero-description">
            Dự án di sản số của trường THPT Chuyên Phan Bội Châu
          </p>
          <button className="btn-primary">
            BẮT ĐẦU <span>→</span>
          </button>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="arrow-down">↓</div>
        </div>
      </section>

      {/* ===== KHUNG 2: GIỚI THIỆU DỰ ÁN ===== */}
      <section className="about-section">
        <div className="container">
          <span className="section-tag">GIỚI THIỆU</span>
          <h2 className="section-title">Về Dự Án The Phan Legacy</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>Dự án là gì?</h3>
              <p>
                The Phan Legacy là không gian di sản số hóa tiên phong của Trường THPT Chuyên Phan Bội Châu. 
                Dự án tái hiện lại toàn bộ lịch sử, kiến trúc và giá trị tinh thần của ngôi trường qua công nghệ không gian 3D tương tác.
              </p>
            </div>
            <div className="about-card">
              <h3>Mang lại điều gì?</h3>
              <p>
                Dự án giúp kết nối các thế hệ học sinh Phan Bội Châu trên khắp thế giới, lưu trữ những kỷ niệm vô giá 
                và truyền cảm hứng về ngọn lửa tri thức, lòng tự hào dân tộc cho các thế hệ mai sau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KHUNG 3: CÁC TRỤ CỘT ===== */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <div>
              <span className="section-sub-tag">— NHỮNG TRỤ CỘT</span>
              <h2 className="features-title">
                Di sản được <em>định hình</em> <br />
                qua năm tháng
              </h2>
            </div>
            <p className="features-intro">
              Bốn trụ cột tạo nên bản sắc của ngôi trường: học thuật xuất sắc, văn hóa phong phú, thể thao mạnh mẽ, và tinh thần sáng tạo không ngừng.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-top">
                <span className="card-icon">📖</span>
                <span className="card-number">01</span>
              </div>
              <h3>Học thuật</h3>
              <p>
                Nền tảng tri thức vững chắc, từ những giải thưởng quốc gia đến những bước tiến vào giảng đường đại học danh tiếng.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-top">
                <span className="card-icon">🎵</span>
                <span className="card-number">02</span>
              </div>
              <h3>Văn hóa</h3>
              <p>
                Những đêm văn nghệ rực rỡ, những vở kịch lay động lòng người, những giai điệu vang mãi theo năm tháng.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-top">
                <span className="card-icon">⚽</span>
                <span className="card-number">03</span>
              </div>
              <h3>Thể thao</h3>
              <p>
                Tinh thần fair-play trên sân bóng, sức mạnh của đội nhóm, và niềm tự hào mỗi khi khoác áo màu trường.
              </p>
            </div>

            <div className="feature-card">
              <div className="card-top">
                <span className="card-icon">💡</span>
                <span className="card-number">04</span>
              </div>
              <h3>Sáng tạo</h3>
              <p>
                Từ những dự án khoa học đến những ý tưởng đột phá, nơi ươm mầm cho những nhà đổi mới tương lai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KHUNG 4: NEWS ===== */}
      <section className="news-section">
        <div className="container">
          <h2 className="news-heading">NEWS</h2>
          <div className="news-list">
            <div className="news-item">
              <span className="news-date">2026.09.03</span>
              <p className="news-text">
                Cập nhật tính năng tham quan thực tế ảo POV và bản đồ 3D tương tác toàn trường.
              </p>
            </div>
            <div className="news-item">
              <span className="news-date">2026.07.20</span>
              <p className="news-text">
                Hoàn thành thu thập hình ảnh và số hóa tư liệu truyền thống Chuyên Phan Bội Châu.
              </p>
            </div>
            <div className="news-item">
              <span className="news-date">2026.07.01</span>
              <p className="news-text">
                Chính thức khởi chạy dự án Di sản số The Phan Legacy.
              </p>
            </div>
          </div>
          <div className="news-footer">
            <button className="btn-view-more">
              VIEW MORE <span>›</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== KHUNG 5: BAN PHÁT TRIỂN ===== */}
      <section className="team-section">
        <div className="container">
          <span className="section-tag center">BAN PHÁT TRIỂN</span>
          <h2 className="section-title center">Thành Viên Nhóm Dự Án</h2>
          
          <div className="team-grid">
            {/* Hàng Leader: 3 người (Trịnh Bá Hiếu ở giữa) */}
            <div className="team-row row-leaders">
              <div className="member-card">
                <div className="avatar-circle">
                  <img src="https://api.dicebear.com/7.x/bottts/svg?seed=BaoVG" alt="Bảo VG" />
                </div>
                <p className="member-name">Bảo VG</p>
                <span className="member-class">A2K53</span>
                <span className="member-role">Trưởng ban Kĩ thuật</span>
              </div>

              <div className="member-card">
                <div className="avatar-circle">
                  <img 
                    src="/Trinh_Ba_Hieu_A1K53.jpg" 
                    alt="Trịnh Bá Hiếu" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=Hieu';
                    }}
                  />
                </div>
                <p className="member-name">Trịnh Bá Hiếu</p>
                <span className="member-class">A1K53</span>
                <span className="member-role">Founder</span>
              </div>

              <div className="member-card">
                <div className="avatar-circle">
                  <img src="https://api.dicebear.com/7.x/bottts/svg?seed=MinhAnh" alt="Nguyễn Minh Anh" />
                </div>
                <p className="member-name">Nguyễn Minh Anh</p>
                <span className="member-class">C1K53</span>
                <span className="member-role">Trưởng ban Nội dung</span>
              </div>
            </div>

            {/* Dãy thành viên: 2 hàng, mỗi hàng 5 người */}
            <div className="team-row-group">
              {/* Hàng thành viên 1 (5 người) */}
              <div className="team-row">
                <div className="member-card">
                  <div className="avatar-circle">
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Khiem" alt="Nguyễn Trọng Khiêm" />
                  </div>
                  <p className="member-name">Nguyễn Trọng Khiêm</p>
                  <span className="member-class">A2K53</span>
                  <span className="member-role">Thành viên ban Kĩ thuật</span>
                </div>

                <div className="member-card">
                  <div className="avatar-circle">
                    <img 
                      src="/quangthanh.jpg" 
                      alt="Võ Quang Thanh" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=QuangThanh';
                      }}
                    />
                  </div>
                  <p className="member-name">Võ Quang Thanh</p>
                  <span className="member-class">A2K54</span>
                  <span className="member-role">Thành viên ban Kĩ thuật</span>
                </div>

                <div className="member-card">
                  <div className="avatar-circle">
                    <img 
                      src="/Luong_Nu_Hong_Anh_C2K54.jpg" 
                      alt="Lương Nữ Hồng Anh" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=HongAnh';
                      }}
                    />
                  </div>
                  <p className="member-name">Lương Nữ Hồng Anh</p>
                  <span className="member-class">C2K54</span>
                  <span className="member-role">Thành viên ban Kĩ thuật</span>
                </div>

                <div className="member-card">
                  <div className="avatar-circle">
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=GiaNhi" alt="Cao Gia Nhi" />
                  </div>
                  <p className="member-name">Cao Gia Nhi</p>
                  <span className="member-class">C1K54</span>
                  <span className="member-role">Thành viên ban Nội dung</span>
                </div>

                <div className="member-card">
                  <div className="avatar-circle">
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=AnhTho" alt="Phạm Thị Anh Thơ" />
                  </div>
                  <p className="member-name">Phạm Thị Anh Thơ</p>
                  <span className="member-class">C2K54</span>
                  <span className="member-role">Thành viên ban Nội dung</span>
                </div>
              </div>

              {/* Hàng thành viên 2 (5 người) */}
              <div className="team-row">
                <div className="member-card">
                  <div className="avatar-circle">
                    <img 
                      src="/Ngo_Thuy_Hong_Phuc_C2K54.jpg" 
                      alt="Ngô Thụy Hồng Phúc" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=HongPhuc';
                      }}
                    />
                  </div>
                  <p className="member-name">Ngô Thụy Hồng Phúc</p>
                  <span className="member-class">C2K54</span>
                  <span className="member-role">Thành viên ban Nội dung</span>
                </div>

                <div className="member-card">
                  <div className="avatar-circle">
                    <img 
                      src="/Bui_Thien_Khai_C5K54.jpg" 
                      alt="Bùi Thiên Khải" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=TruongKhai';
                      }}
                    />
                  </div>
                  <p className="member-name">Bùi Thiên Khải</p>
                  <span className="member-class">C5K54</span>
                  <span className="member-role">Thành viên ban Nội dung</span>
                </div>

                <div className="member-card">
                  <div className="avatar-circle">
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=TaiDinh" alt="Nguyễn Tài Định" />
                  </div>
                  <p className="member-name">Nguyễn Tài Định</p>
                  <span className="member-class">C5K54</span>
                  <span className="member-role">Thành viên ban Nội dung</span>
                </div>

                <div className="member-card">
                  <div className="avatar-circle">
                    <img 
                      src="/Nguyen_Tram_Anh_C5K54.jpg" 
                      alt="Nguyễn Trâm Anh" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=TramAnh';
                      }}
                    />
                  </div>
                  <p className="member-name">Nguyễn Trâm Anh</p>
                  <span className="member-class">C5K54</span>
                  <span className="member-role">Thành viên ban Nội dung</span>
                </div>

                <div className="member-card">
                  <div className="avatar-circle">
                    <img 
                      src="/Tran_Ha_Bang_Bang_C8K54.jpg" 
                      alt="Trần Hà Băng Băng" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/bottts/svg?seed=BangBang';
                      }}
                    />
                  </div>
                  <p className="member-name">Trần Hà Băng Băng</p>
                  <span className="member-class">C8K54</span>
                  <span className="member-role">Thành viên ban Nội dung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KHUNG 6: FOOTER ===== */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-partners">
            <p className="partners-title">Đồng hành & Phát triển cùng:</p>
            <div className="partner-logos">
              <span>THPT Chuyên Phan Bội Châu</span>
              <span>•</span>
              <span>Di Sản Số Việt Nam</span>
              <span>•</span>
              <span>The Phan Legacy Team</span>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <span className="copyright">THE PHAN LEGACY © 2024</span>
            <span className="footer-subtext">Dự án di sản số của trường THPT Chuyên Phan Bội Châu</span>
          </div>
        </div>
      </footer>
    </div>
  );
}