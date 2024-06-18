
import styles from "./nav.module.css"
function Nav() {
    return (
        <div className={styles.wrapNav} >
            <nav className={styles.mainNav} >
                <ul className={styles.mainNav__list} >
                    <li className={styles['mainNav__list-item']} >
                        <a class="btn-home" href="/" title="VietNamNet" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            <span class="icon-home"></span>
                        </a>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/chinh-tri">
                        <a title="Chính trị" href="/chinh-tri" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Chính trị
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a title="Sự kiện" href="/chinh-tri/su-kien" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Sự kiện</a>
                            </li>
                            <li>
                                <a title="Xây dựng đảng" href="/chinh-tri/xay-dung-dang" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Xây dựng đảng</a>
                            </li>
                            <li>
                                <a title="Đối ngoại" href="/chinh-tri/doi-ngoai" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Đối ngoại</a>
                            </li>
                            <li>
                                <a title="Bàn luận" href="/chinh-tri/ban-luan" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Bàn luận</a>
                            </li>

                        </ul>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/thoi-su">
                        <a title="Thời sự" href="/thoi-su" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Thời sự
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a title="Quốc hội" href="/thoi-su/quoc-hoi-khoa-xv" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Quốc hội</a>
                            </li>
                            <li>
                                <a title="An toàn giao thông" href="/thoi-su/an-toan-giao-thong" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">An toàn giao thông</a>
                            </li>
                            <li>
                                <a title="Môi trường" href="/thoi-su/moi-truong" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Môi trường</a>
                            </li>
                            <li>
                                <a title="BHXH-BHYT" href="/thoi-su/bhxh-bhyt" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">BHXH-BHYT</a>
                            </li>
                            <li>
                                <a title="Chống tham nhũng" href="/thoi-su/chong-tham-nhung" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Chống tham nhũng</a>
                            </li>
                            <li>
                                <a title="Quốc phòng" href="/thoi-su/quoc-phong" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Quốc phòng</a>
                            </li>

                        </ul>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/kinh-doanh">
                        <a title="Kinh doanh" href="/kinh-doanh" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Kinh doanh
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a title="Net Zero" href="/net-zero" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Net Zero</a>
                            </li>
                            <li>
                                <a title="Tài chính" href="/kinh-doanh/tai-chinh" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Tài chính</a>
                            </li>
                            <li>
                                <a title="Đầu tư" href="/kinh-doanh/dau-tu" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Đầu tư</a>
                            </li>
                            <li>
                                <a title="Thị trường" href="/kinh-doanh/thi-truong" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Thị trường</a>
                            </li>
                            <li>
                                <a title="Doanh nhân" href="/kinh-doanh/doanh-nhan" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Doanh nhân</a>
                            </li>
                            <li>
                                <a title="Tư vấn tài chính" href="/kinh-doanh/tu-van-tai-chinh" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Tư vấn tài chính</a>
                            </li>

                        </ul>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/the-thao">
                        <a title="Thể thao" href="/the-thao" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Thể thao
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a class="no-check-utm-source" href="/the-thao/euro" title="EURO 2024" data-utm-source="#vnn_source=camp&amp;vnn_medium=menutop&amp;vnn_campaign=euro-2024">
                                    EURO 2024
                                </a>
                            </li>
                            <li>
                                <a title="Bóng đá Việt Nam" href="/the-thao/bong-da-viet-nam" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Bóng đá Việt Nam</a>
                            </li>
                            <li>
                                <a title="Bóng đá quốc tế" href="/the-thao/bong-da-quoc-te" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Bóng đá quốc tế</a>
                            </li>
                            <li>
                                <a title="Hậu trường" href="/the-thao/hau-truong" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Hậu trường</a>
                            </li>
                            <li>
                                <a title="Các môn khác" href="/the-thao/cac-mon-khac" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Các môn khác</a>
                            </li>
                            <li>
                                <a title="Tường thuật trực tiếp" href="/the-thao/xem-truc-tiep-bong-da" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Tường thuật trực tiếp</a>
                            </li>
                            <li>
                                <a title="Dữ liệu bóng đá" href="/the-thao/du-lieu-bong-da" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Dữ liệu bóng đá</a>
                            </li>
                            <li>
                                <a title="Tin chuyển nhượng" href="/the-thao/tin-chuyen-nhuong" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Tin chuyển nhượng</a>
                            </li>
                            <li>
                                <a title="Video thể thao" href="/the-thao/video-the-thao" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Video thể thao</a>
                            </li>

                        </ul>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/the-gioi">
                        <a title="Thế giới" href="/the-gioi" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Thế giới
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a title="Bình luận quốc tế" href="/the-gioi/binh-luan-quoc-te" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Bình luận quốc tế</a>
                            </li>
                            <li>
                                <a title="Chân dung" href="/the-gioi/chan-dung" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Chân dung</a>
                            </li>
                            <li>
                                <a title="Hồ sơ" href="/the-gioi/ho-so" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Hồ sơ</a>
                            </li>
                            <li>
                                <a title="Thế giới đó đây" href="/the-gioi/the-gioi-do-day" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Thế giới đó đây</a>
                            </li>
                            <li>
                                <a title="Việt Nam và thế giới" href="/the-gioi/viet-nam-va-the-gioi" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Việt Nam và thế giới</a>
                            </li>
                            <li>
                                <a title="Quân sự" href="/the-gioi/quan-su" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Quân sự</a>
                            </li>

                        </ul>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/giao-duc">
                        <a title="Giáo dục" href="/giao-duc" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Giáo dục
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a class="no-check-utm-source" href="/giao-duc/diem-thi/tra-cuu-diem-chuan-cd-dh-2023" title="Điểm chuẩn ĐH-CĐ"
                                    data-utm-source="#vnn_source=camp&vnn_medium=menutop&vnn_campaign=diem-chuan-dh-cd-2023">
                                    Điểm chuẩn ĐH-CĐ
                                </a>
                            </li>
                            <li>
                                <a class="no-check-utm-source" title="Thi lớp 10" href="/giao-duc/thi-vao-lop-10" data-utm-source="#vnn_source=camp&amp;vnn_medium=menutop&amp;vnn_campaign=thi-lop-10-nam-2024">
                                    Thi lớp 10
                                </a>
                            </li>
                            <li>
                                <a title="Nhà trường" href="/giao-duc/nha-truong" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Nhà trường</a>
                            </li>
                            <li>
                                <a title="Chân dung" href="/giao-duc/chan-dung" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Chân dung</a>
                            </li>
                            <li>
                                <a title="Góc phụ huynh" href="/giao-duc/goc-phu-huynh" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Góc phụ huynh</a>
                            </li>
                            <li>
                                <a title="Tuyển sinh " href="/giao-duc/tuyen-sinh" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Tuyển sinh </a>
                            </li>
                            <li>
                                <a title="Du học" href="/giao-duc/du-hoc" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Du học</a>
                            </li>
                            <li>
                                <a title="Học Tiếng Anh" href="/giao-duc/hoc-tieng-anh" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Học Tiếng Anh</a>
                            </li>
                            <li>
                                <a title="Trắc nghiệm" href="/giao-duc/trac-nghiem" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Trắc nghiệm</a>
                            </li>
                            <li>
                                <a title="Khoa học" href="/giao-duc/khoa-hoc" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Khoa học</a>
                            </li>
                            <li>
                                <a title="AI CONTEST 2024" href="/giao-duc/ai-contest-2024" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">AI CONTEST 2024</a>
                            </li>
                            <li>
                                <a title="Tin tức việc làm" href="/giao-duc/tuyen-dung/" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Tin tức việc làm</a>
                            </li>

                        </ul>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/giai-tri">
                        <a title="Giải trí" href="/giai-tri" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Giải trí
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a title="Thế giới sao" href="/giai-tri/the-gioi-sao" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Thế giới sao</a>
                            </li>
                            <li>
                                <a title="Hoa hậu" href="/giai-tri/hoa-hau" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Hoa hậu</a>
                            </li>
                            <li>
                                <a title="Thời trang" href="/giai-tri/thoi-trang" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Thời trang</a>
                            </li>
                            <li>
                                <a title="Nhạc" href="/giai-tri/nhac" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Nhạc</a>
                            </li>
                            <li>
                                <a title="Phim" href="/giai-tri/phim" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Phim</a>
                            </li>
                            <li>
                                <a title="Truyền hình" href="/giai-tri/truyen-hinh" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Truyền hình</a>
                            </li>

                        </ul>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/van-hoa">
                        <a title="Văn hóa" href="/van-hoa" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Văn hóa
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a title="Sách" href="/van-hoa/sach" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Sách</a>
                            </li>
                            <li>
                                <a title="Di sản" href="/van-hoa/di-san" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Di sản</a>
                            </li>
                            <li>
                                <a title="Mỹ thuật - Sân khấu" href="/van-hoa/my-thuat-san-khau" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Mỹ thuật - Sân khấu</a>
                            </li>
                            <li>
                                <a title="UNESCO" href="/van-hoa/unesco" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">UNESCO</a>
                            </li>
                            <li>
                                <a title="Điều Còn Mãi" href="/dieu-con-mai" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Điều Còn Mãi</a>
                            </li>

                        </ul>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/tuan-viet-nam" >
                        <a title="Tuần Việt Nam" href="/tuan-viet-nam" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Tuần Việt Nam
                        </a>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/doi-song">
                        <a title="Đời sống" href="/doi-song" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Đời sống
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a title="Gia đình" href="/doi-song/gia-dinh" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Gia đình</a>
                            </li>
                            <li>
                                <a title="Chuyện lạ" href="/doi-song/chuyen-la" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Chuyện lạ</a>
                            </li>
                            <li>
                                <a title="Ẩm thực" href="/doi-song/am-thuc" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Ẩm thực</a>
                            </li>
                            <li>
                                <a title="Giới trẻ" href="/doi-song/gioi-tre" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Giới trẻ</a>
                            </li>
                            <li>
                                <a title="Mẹo vặt" href="/doi-song/meo-vat" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Mẹo vặt</a>
                            </li>
                            <li>
                                <a title="Tâm sự" href="/doi-song/tam-su" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Tâm sự</a>
                            </li>

                        </ul>
                    </li>
                    <li className={styles['mainNav__list-item']}  routeractive="/suc-khoe">
                        <a title="Sức khỏe" href="/suc-khoe" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">
                            Sức khỏe
                        </a>

                        <ul className={styles['sub__menu']}>
                            <li>
                                <a title="Tin tức" href="/suc-khoe/suc-khoe-24h" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Tin tức</a>
                            </li>
                            <li>
                                <a title="Làm đẹp" href="/suc-khoe/lam-dep" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Làm đẹp</a>
                            </li>
                            <li>
                                <a title="Tư vấn sức khỏe" href="/suc-khoe/tu-van-suc-khoe" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Tư vấn sức khỏe</a>
                            </li>
                            <li>
                                <a title="Đàn ông" href="/suc-khoe/dan-ong" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Đàn ông</a>
                            </li>
                            <li>
                                <a title="Các loại bệnh" href="/suc-khoe/benh" data-utm-source="#vnn_source=trangchu&amp;vnn_medium=menu-top">Các loại bệnh</a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;