// ============================================================
// HATD STUDIO — STATIC TRANSLATION SYSTEM (EN ↔ VI)
// Covers ALL pages with accurate, hand-written Vietnamese
// ============================================================

(function () {
  'use strict';

  // ----------------------------------------------------------
  // TRANSLATION MAP  (selector → [EN text, VI text])
  // Keys are CSS selectors; we match by textContent.trim()
  // ----------------------------------------------------------

  var TRANSLATIONS = {

    // ===== NAVIGATION (shared across all pages) =====
    'Home':                         'Trang Chủ',
    'Gallery':                      'Thư Viện Ảnh',
    'Services':                     'Dịch Vụ',
    'Services ▼':                   'Dịch Vụ ▼',
    'Post':                         'Bài Viết',
    'Contact':                      'Liên Hệ',

    // ===== INDEX — HERO SLIDER =====
    'Architecture':                 'Kiến Trúc',
    'Creating thoughtful architecture with precision and expertise.':
      'Kiến trúc được thiết kế tỉ mỉ với sự chính xác và chuyên môn cao.',
    'Specialising in residential design that adapts to your way of life —\nfrom classic restorations to contemporary new builds.':
      'Chuyên thiết kế nhà ở phù hợp với lối sống của bạn —\ntừ cải tạo nhà cổ điển đến xây mới hiện đại.',
    'Specialising in residential design that adapts to your way of life —from classic restorations to contemporary new builds.':
      'Chuyên thiết kế nhà ở phù hợp với lối sống của bạn — từ cải tạo nhà cổ điển đến xây mới hiện đại.',
    'Explore Projects':             'Khám Phá Dự Án',
    'Residential Project':          'Thiết Kế Nhà Ở',
    'Custom homes, villas, and premium apartments':
      'Nhà phố, biệt thự và căn hộ cao cấp theo yêu cầu',
    'Learn More':                   'Tìm Hiểu Thêm',
    'COMMERCIAL & SHOP\nFIT OUT':   'THƯƠNG MẠI &\nCỬA HÀNG',
    'Office, showroom, retail, and restaurant design':
      'Thiết kế văn phòng, showroom, bán lẻ và nhà hàng',
    'Extensions & Renovations':     'Mở Rộng & Cải Tạo',
    'Home extensions, renovations, and period restorations':
      'Mở rộng, cải tạo nhà và phục hồi nhà cổ',

    // ===== INDEX — ABOUT SECTION =====
    'About Us':                     'Về Chúng Tôi',
    'Architecture that\nendures generations':
      'Kiến trúc\nbền vững qua nhiều thế hệ',
    'Architecture that endures generations':
      'Kiến trúc bền vững qua nhiều thế hệ',
    'Every great space starts with your story. We bring your vision to life by balancing bold modern concepts with understated, effortless elegance, ensuring that every clean line serves a purpose. By merging striking architectural innovation with everyday functionality, we don\'t just design buildings—we thoughtfully craft sophisticated, enduring spaces that feel deeply personal and elevate the way you live.':
      'Mỗi không gian tuyệt vời đều bắt đầu từ câu chuyện của bạn. Chúng tôi hiện thực hóa tầm nhìn của bạn bằng cách kết hợp những ý tưởng hiện đại táo bạo với vẻ thanh lịch tự nhiên, nhẹ nhàng — đảm bảo từng đường nét đều có ý nghĩa. Bằng cách hòa quyện sự đổi mới kiến trúc ấn tượng với chức năng thực tiễn hàng ngày, chúng tôi không chỉ thiết kế công trình — chúng tôi tạo ra những không gian tinh tế, bền vững và đậm dấu ấn cá nhân.',
    'Years Experience':             'Năm Kinh Nghiệm',
    'Projects Completed':           'Dự Án Hoàn Thành',
    'Client Satisfaction':          'Sự Hài Lòng Của Khách',

    // ===== INDEX — TESTIMONIALS =====
    'Testimonials':                 'Đánh Giá Khách Hàng',
    'What our clients say':         'Khách hàng nói gì về chúng tôi',
    '"HATD Studio transformed our vision into reality. Their attention to detail and commitment to quality was evident at every stage. The team navigated complex approvals seamlessly and delivered a home that exceeds our expectations."':
      '"HATD Studio đã biến tầm nhìn của chúng tôi thành hiện thực. Sự chú ý đến từng chi tiết và cam kết về chất lượng thể hiện rõ ở mọi giai đoạn. Đội ngũ xử lý các thủ tục phức tạp một cách trơn tru và bàn giao một ngôi nhà vượt ngoài mong đợi của chúng tôi."',
    'Residential Client, Sydney':   'Khách hàng Nhà Ở, Sydney',
    '"Working with HATD Studio was effortless. They understood our brand identity and translated it perfectly into our new flagship store. The fit-out was completed on time and within budget. Highly recommended."':
      '"Làm việc với HATD Studio thật dễ dàng. Họ hiểu đúng bản sắc thương hiệu của chúng tôi và thể hiện hoàn hảo vào cửa hàng flagship mới. Công trình hoàn thành đúng tiến độ và trong ngân sách. Rất khuyến khích."',
    'Commercial Client, Melbourne': 'Khách hàng Thương Mại, Melbourne',
    '"The renovation of our period home was a complex project, but HATD Studio handled everything with professionalism and care. They respected the original character while introducing modern functionality. The result is stunning."':
      '"Việc cải tạo ngôi nhà cổ của chúng tôi là một dự án phức tạp, nhưng HATD Studio đã xử lý mọi thứ chuyên nghiệp và tận tâm. Họ tôn trọng kiến trúc gốc trong khi đưa vào chức năng hiện đại. Kết quả thật tuyệt vời."',
    'Renovation Client, Brisbane':  'Khách hàng Cải Tạo, Brisbane',
    'Based on 128 client reviews • Google Rating':
      'Dựa trên 128 đánh giá khách hàng • Xếp hạng Google',

    // ===== GALLERY PAGE — <br> variants (matched via innerText) =====
    'OUR\nPROJECTS':                'DỰ ÁN\nCỦA CHÚNG TÔI',
    'RESIDENTIAL\nDESIGN':          'THIẾT KẾ\nNHÀ Ở',
    'COMMERCIAL\n& RETAIL':         'THƯƠNG MẠI\n& BÁN LẺ',

    // ===== INDEX — <br> variants =====
    'COMMERCIAL & SHOP\nFIT OUT':   'THƯƠNG MẠI & CỬA HÀNG\nLẮP ĐẶT',
    'Architecture that\nendures generations':
      'Kiến trúc\nbền vững qua nhiều thế hệ',
    'Specialising in residential design that adapts to your way of life —\nfrom classic restorations to contemporary new builds.':
      'Chuyên thiết kế nhà ở phù hợp với lối sống của bạn —\ntừ cải tạo nhà cổ điển đến xây mới hiện đại.',

    // ===== GALLERY PAGE =====
    'OUR\nPROJECTS':                'DỰ ÁN\nCỦA CHÚNG TÔI',
    'OUR PROJECTS':                 'DỰ ÁN CỦA CHÚNG TÔI',
    'A curated look at our residential and commercial design work — each space crafted with purpose and care.':
      'Tuyển tập các dự án nhà ở và thương mại của chúng tôi — mỗi không gian được tạo ra với mục đích và sự tỉ mỉ.',
    'Each project tells a story of thoughtful design, meticulous craftsmanship, and a deep understanding of how people live. Explore our portfolio of residential and commercial spaces.':
      'Mỗi dự án kể câu chuyện về thiết kế được suy nghĩ thấu đáo, tay nghề tỉ mỉ và sự thấu hiểu sâu sắc về cách con người sinh sống. Khám phá danh mục dự án nhà ở và thương mại của chúng tôi.',
    'Residential':                  'Nhà Ở',
    'Residential Design':           'Thiết Kế Nhà Ở',
    'RESIDENTIAL\nDESIGN':          'THIẾT KẾ\nNHÀ Ở',
    'RESIDENTIAL DESIGN':           'THIẾT KẾ NHÀ Ở',
    'COMMERCIAL\n& RETAIL':         'THƯƠNG MẠI\n& BÁN LẺ',
    'COMMERCIAL& RETAIL':           'THƯƠNG MẠI & BÁN LẺ',
    'Spaces & Details':             'Không Gian & Chi Tiết',
    'Facade & Interior':            'Mặt Tiền & Nội Thất',
    'Facade':                       'Mặt Tiền',
    'Exteriors':                    'Ngoại Thất',
    'Commercial':                   'Thương Mại',
    'Residential Interiors':        'Không Gian Nội Thất Nhà Ở',
    'Commercial Spaces':            'Không Gian Thương Mại',
    'Interior Details':             'Chi Tiết Nội Thất',
    'Kitchen':                      'Bếp',
    'Alfresco':                     'Sân Hiên',
    'Office Nook':                  'Góc Làm Việc',
    'Bathroom':                     'Phòng Tắm',
    'Floor Plans':                  'Bản Vẽ Mặt Bằng',
    'Floor Plan Gallery':           'Thư Viện Bản Vẽ Mặt Bằng',
    'Ready to start your project?': 'Bạn đã sẵn sàng bắt đầu dự án?',
    'Get in touch with our team to discuss your vision.':
      'Liên hệ với đội ngũ của chúng tôi để thảo luận về ý tưởng của bạn.',
    'Start Your Project →':         'Bắt Đầu Dự Án →',

    // ===== SERVICES PAGE =====
    'Services':                     'Dịch Vụ',
    'Our Process':                  'Quy Trình Làm Việc',
    'DESIGN CONSULTANCE':           'TƯ VẤN THIẾT KẾ',
    'We work closely with you to understand your lifestyle, needs, and aspirations. Through site analysis, concept sketching, and 3D modeling, we translate your ideas into architectural form. Our consultative approach ensures every design decision is intentional — balancing aesthetics, functionality, and budget from the very first meeting.':
      'Chúng tôi làm việc chặt chẽ cùng bạn để thấu hiểu lối sống, nhu cầu và khát vọng của bạn. Thông qua phân tích công trình, phác thảo ý tưởng và mô hình 3D, chúng tôi chuyển hóa ý tưởng của bạn thành hình thức kiến trúc. Cách tiếp cận tư vấn của chúng tôi đảm bảo mọi quyết định thiết kế đều có chủ đích — cân bằng giữa thẩm mỹ, chức năng và ngân sách ngay từ buổi gặp đầu tiên.',
    'TOWN PLANNING PERMIT':         'GIẤY PHÉP QUY HOẠCH',
    'We navigate the complexities of local planning schemes on your behalf. Our team prepares and submits all required documentation — including design responses, shadow diagrams, and landscape plans — then liaises with council officers to secure your permit. We\'re committed to achieving approval without compromising your design vision.':
      'Chúng tôi xử lý sự phức tạp của các quy hoạch địa phương thay mặt bạn. Đội ngũ của chúng tôi chuẩn bị và nộp toàn bộ hồ sơ cần thiết — bao gồm phản hồi thiết kế, sơ đồ bóng đổ và bản vẽ cảnh quan — sau đó liên hệ với cán bộ hội đồng để đảm bảo giấy phép. Chúng tôi cam kết đạt được phê duyệt mà không ảnh hưởng đến tầm nhìn thiết kế của bạn.',
    'BUILDING PERMIT':              'GIẤY PHÉP XÂY DỰNG',
    'Once town planning is approved, we develop fully coordinated construction drawings that meet NCC and Australian Standards. Our documentation is precise and buildable, covering structural, hydraulic, energy, and fire protection requirements — giving you a clear path to a compliant building permit.':
      'Sau khi quy hoạch được phê duyệt, chúng tôi phát triển bản vẽ thi công được phối hợp đầy đủ đáp ứng NCC và Tiêu chuẩn Úc. Tài liệu của chúng tôi chính xác và có thể thi công được, bao gồm các yêu cầu về kết cấu, thủy lực, năng lượng và phòng cháy chữa cháy — mang lại cho bạn con đường rõ ràng để có giấy phép xây dựng hợp lệ.',
    'COORDINATION':                 'PHỐI HỢP',
    'We act as the central point of contact, managing communication between structural engineers, civil consultants, energy assessors, and other specialists. By resolving technical interfaces early, we prevent costly on-site surprises and keep your project moving forward efficiently.':
      'Chúng tôi đóng vai trò là đầu mối liên lạc trung tâm, quản lý giao tiếp giữa kỹ sư kết cấu, tư vấn dân sự, đánh giá năng lượng và các chuyên gia khác. Bằng cách giải quyết sớm các vấn đề kỹ thuật liên quan, chúng tôi ngăn ngừa những bất ngờ tốn kém trên công trường và giúp dự án tiến triển hiệu quả.',
    'CONSTRUCTION SUPPORT':         'HỖ TRỢ THI CÔNG',
    'Your project doesn\'t stop at documentation. We remain involved throughout construction — conducting regular site inspections, responding to RFIs, reviewing shop drawings, and ensuring the built outcome matches the approved design. Our independent oversight protects your investment and ensures quality execution.':
      'Dự án của bạn không dừng lại ở tài liệu. Chúng tôi tiếp tục tham gia trong suốt quá trình thi công — tiến hành kiểm tra công trường định kỳ, phản hồi các yêu cầu thông tin (RFI), xem xét bản vẽ thi công và đảm bảo kết quả xây dựng phù hợp với thiết kế đã được phê duyệt.',
    'Custom homes, villas, and premium apartments with optimized functionality and aesthetics.':
      'Nhà phố, biệt thự và căn hộ cao cấp với chức năng tối ưu và thẩm mỹ vượt trội.',
    'Commercial & Shop Fit Out':    'Thương Mại & Lắp Đặt Cửa Hàng',
    'Professional office, showroom, retail, and restaurant design that attracts customers.':
      'Thiết kế văn phòng, showroom, bán lẻ và nhà hàng chuyên nghiệp thu hút khách hàng.',
    'Renovate, upgrade, and expand your living space with a fresh new look.':
      'Cải tạo, nâng cấp và mở rộng không gian sống của bạn với diện mạo mới mẻ.',

    // ===== SERVICES — RESIDENTIAL PAGE =====
    'Services':                             'Dịch Vụ',
    'Residential Project':                  'Dự Án Nhà Ở',
    'Custom homes, villas, and premium apartments':
      'Nhà phố, biệt thự và căn hộ cao cấp theo yêu cầu',
    'Home':                                 'Trang Chủ',
    'As specialised residential building designers, we bring together technical expertise and creative vision to deliver homes that are as beautiful as they are functional. From classic restorations to contemporary new builds, every project is shaped by your way of life.':
      'Là những nhà thiết kế công trình nhà ở chuyên nghiệp, chúng tôi kết hợp chuyên môn kỹ thuật và tầm nhìn sáng tạo để tạo ra những ngôi nhà vừa đẹp vừa tiện dụng. Từ cải tạo nhà cổ điển đến xây mới hiện đại, mọi dự án đều được định hình theo lối sống của bạn.',
    'Feasibility':                          'Khảo Sát Khả Thi',
    'We provide expert site analysis and development feasibility studies to establish yield potential and identify planning constraints early. This strategic due diligence de-risks your investment and ensures you move forward with confidence.':
      'Chúng tôi cung cấp phân tích công trường chuyên sâu và nghiên cứu khả thi phát triển nhằm xác định tiềm năng khai thác và nhận biết sớm các ràng buộc quy hoạch. Sự thẩm định chiến lược này giúp giảm thiểu rủi ro cho khoản đầu tư của bạn và đảm bảo bạn tiến tới với sự tự tin.',
    'Building Design':                      'Thiết Kế Công Trình',
    'As specialised residential building designers, we ensure the design phase is the foundation of your investment. Whether maximising yield for a multi-unit development or curating lifestyle for a luxury custom home, this is where value is created and risks are managed.':
      'Là những nhà thiết kế công trình nhà ở chuyên nghiệp, chúng tôi đảm bảo giai đoạn thiết kế là nền tảng cho khoản đầu tư của bạn. Dù là tối đa hóa lợi nhuận cho dự án đa căn hộ hay tạo ra lối sống cho ngôi nhà tùy chỉnh cao cấp, đây chính là nơi giá trị được tạo ra và rủi ro được quản lý.',
    'Town Planning':                        'Quy Hoạch Đô Thị',
    'If town planning or DA approval is required, we provide a comprehensive strategic town planning service that manages the entire application process. This includes preparing response plans, authoring detailed reports, engaging necessary external consultants, and managing final submissions.':
      'Nếu cần phê duyệt quy hoạch đô thị hoặc DA, chúng tôi cung cấp dịch vụ quy hoạch đô thị chiến lược toàn diện quản lý toàn bộ quy trình nộp đơn. Điều này bao gồm chuẩn bị các bản vẽ phản hồi, soạn thảo báo cáo chi tiết, thuê tư vấn bên ngoài cần thiết và quản lý các hồ sơ cuối cùng.',
    'Construction Documentation':           'Hồ Sơ Thi Công',
    'We tailor our documentation services to suit each project and budget. Our documentation goes far beyond standard approvals, providing a comprehensive instruction manual for the builder. By resolving complex junctions on paper, we ensure the construction phase runs smoothly.':
      'Chúng tôi điều chỉnh dịch vụ tài liệu để phù hợp với từng dự án và ngân sách. Tài liệu của chúng tôi vượt xa các phê duyệt tiêu chuẩn, cung cấp hướng dẫn toàn diện cho nhà thầu. Bằng cách giải quyết các giao điểm phức tạp trên giấy tờ, chúng tôi đảm bảo giai đoạn thi công diễn ra suôn sẻ.',
    'Builder Tendering':                    'Đấu Thầu Nhà Thầu',
    'Finding the right builder is just as critical as the design itself. We assist in the tendering process to ensure you are paired with a construction team that aligns with your project\'s complexity and budget.':
      'Tìm được nhà thầu phù hợp cũng quan trọng như chính bản thân thiết kế. Chúng tôi hỗ trợ trong quy trình đấu thầu để đảm bảo bạn được ghép cặp với đội ngũ thi công phù hợp với độ phức tạp và ngân sách dự án của bạn.',
    'Construction Management':              'Quản Lý Thi Công',
    'You only build your home once. The most effective way to ensure the build matches the vision is to keep the design team involved. As your independent advocate, we visit the site to monitor progress and clarify details.':
      'Bạn chỉ xây nhà một lần. Cách hiệu quả nhất để đảm bảo công trình phù hợp với tầm nhìn là giữ đội ngũ thiết kế tham gia. Là người đại diện độc lập của bạn, chúng tôi thăm công trường để theo dõi tiến độ và làm rõ các chi tiết.',
    'Ready to start your project?':         'Bạn đã sẵn sàng bắt đầu dự án?',
    'Get in touch with our team to discuss your vision.':
      'Liên hệ với đội ngũ của chúng tôi để thảo luận về ý tưởng của bạn.',
    'Request Consultation →':               'Yêu Cầu Tư Vấn →',

    // ===== SERVICES — COMMERCIAL PAGE =====
    'Commercial & Shop Fit Out':            'Thương Mại & Lắp Đặt Cửa Hàng',
    'Office, showroom, retail, and restaurant design':
      'Thiết kế văn phòng, showroom, bán lẻ và nhà hàng',
    'We deliver pragmatic commercial design solutions focused on operational flow, brand presence, and strict compliance. From boutique retail to large-format office spaces, we create environments that work for your business and leave a lasting impression on your clients.':
      'Chúng tôi cung cấp các giải pháp thiết kế thương mại thực tiễn tập trung vào luồng vận hành, sự hiện diện thương hiệu và tuân thủ nghiêm ngặt. Từ bán lẻ boutique đến không gian văn phòng quy mô lớn, chúng tôi tạo ra môi trường phù hợp với doanh nghiệp của bạn và để lại ấn tượng lâu dài với khách hàng.',
    'Commercial Design':                    'Thiết Kế Thương Mại',
    'We deliver pragmatic design solutions focused on operational flow, brand presence, and strict compliance. Our accurate documentation ensures your commercial asset is approved and operational without unnecessary delay.':
      'Chúng tôi cung cấp các giải pháp thiết kế thực tiễn tập trung vào luồng vận hành, sự hiện diện thương hiệu và tuân thủ nghiêm ngặt. Tài liệu chính xác của chúng tôi đảm bảo tài sản thương mại của bạn được phê duyệt và đi vào hoạt động mà không có sự chậm trễ không cần thiết.',
    'Shop Fit Out':                         'Lắp Đặt Cửa Hàng',
    'Specialised retail and shop fit-out design that maximises customer experience and reflects your brand identity. From boutique stores to large format retail, we create spaces that work for your business.':
      'Thiết kế bán lẻ và lắp đặt cửa hàng chuyên biệt tối đa hóa trải nghiệm khách hàng và phản ánh bản sắc thương hiệu của bạn. Từ cửa hàng boutique đến bán lẻ quy mô lớn, chúng tôi tạo ra không gian phù hợp với doanh nghiệp của bạn.',
    'Office & Workspace':                   'Văn Phòng & Không Gian Làm Việc',
    'Modern office environments that foster productivity, collaboration, and well-being. We balance open-plan flexibility with focused work zones, integrating your brand identity throughout the space.':
      'Môi trường văn phòng hiện đại thúc đẩy năng suất, cộng tác và sức khỏe. Chúng tôi cân bằng sự linh hoạt của mặt bằng mở với các khu vực làm việc tập trung, tích hợp bản sắc thương hiệu của bạn xuyên suốt không gian.',
    'Hospitality & Restaurant':             'Khách Sạn & Nhà Hàng',
    'From intimate dining rooms to large-scale restaurant design, we craft hospitality spaces that enhance the guest experience. Every detail — lighting, acoustics, flow — is considered to support your concept.':
      'Từ phòng ăn thân mật đến thiết kế nhà hàng quy mô lớn, chúng tôi tạo ra các không gian khách sạn nâng cao trải nghiệm của khách. Mọi chi tiết — ánh sáng, âm thanh, luồng đi — đều được xem xét để hỗ trợ concept của bạn.',
    'Compliance & Documentation':           'Tuân Thủ & Tài Liệu',
    'Commercial projects require rigorous compliance documentation. We manage all regulatory requirements, ensuring your project meets building codes, fire safety, and accessibility standards from day one.':
      'Các dự án thương mại yêu cầu tài liệu tuân thủ nghiêm ngặt. Chúng tôi quản lý tất cả các yêu cầu pháp lý, đảm bảo dự án của bạn đáp ứng các quy chuẩn xây dựng, an toàn phòng cháy và tiêu chuẩn tiếp cận từ ngày đầu tiên.',
    'Project Management':                   'Quản Lý Dự Án',
    'From concept to completion, we oversee every phase of your commercial project. Our team coordinates with contractors, suppliers, and certifiers to deliver on time and within budget.':
      'Từ concept đến hoàn thiện, chúng tôi giám sát mọi giai đoạn của dự án thương mại. Đội ngũ của chúng tôi phối hợp với nhà thầu, nhà cung cấp và đơn vị chứng nhận để bàn giao đúng tiến độ và trong ngân sách.',

    // ===== SERVICES — EXTENSIONS PAGE =====
    'Extensions & Renovations':             'Mở Rộng & Cải Tạo',
    'Home extensions, renovations, and period restorations':
      'Mở rộng nhà, cải tạo và phục hồi nhà cổ',
    'We believe in the power of transformation. Whether you\'re extending your family home, renovating a tired space, or restoring a period property, our team brings the same precision and care to every project — respecting what exists while introducing new possibilities.':
      'Chúng tôi tin vào sức mạnh của sự chuyển đổi. Dù bạn đang mở rộng ngôi nhà gia đình, cải tạo không gian cũ kỹ hay phục hồi nhà cổ, đội ngũ của chúng tôi mang đến sự chính xác và tỉ mỉ như nhau cho mọi dự án — tôn trọng những gì đã có trong khi giới thiệu những khả năng mới.',
    'Home Extensions':                      'Mở Rộng Nhà Ở',
    'Seamlessly extend your living space with designs that feel intentional, not added on. We respect the original character while introducing modern functionality and flow.':
      'Mở rộng không gian sống của bạn một cách liền mạch với các thiết kế có chủ đích, không chắp vá. Chúng tôi tôn trọng đặc trưng ban đầu trong khi giới thiệu chức năng và luồng đi hiện đại.',
    'Renovations':                          'Cải Tạo',
    'Transform your existing home with renovation plans that modernise, refresh, and add value. We reimagine existing structures to create high-performing homes that are practical to build.':
      'Cải tạo ngôi nhà hiện có của bạn với các kế hoạch cải tạo hiện đại hóa, làm mới và tăng thêm giá trị. Chúng tôi tái tưởng tượng các cấu trúc hiện có để tạo ra những ngôi nhà hiệu suất cao, thực tế để xây dựng.',
    'Interior Reconfiguration':             'Tái Cấu Trúc Nội Thất',
    'Sometimes the best transformation comes from rethinking the layout entirely. We assess structural possibilities to open up, reconfigure, and reconnect spaces for a more liveable result.':
      'Đôi khi sự biến đổi tốt nhất đến từ việc suy nghĩ lại toàn bộ bố cục. Chúng tôi đánh giá các khả năng kết cấu để mở rộng, tái cấu hình và kết nối lại không gian cho kết quả có thể ở tốt hơn.',
    'Planning & Approvals':                 'Quy Hoạch & Phê Duyệt',
    'Extensions and renovations often require planning permits or council approval. We manage the entire application process, liaising with relevant authorities to get your project approved efficiently.':
      'Mở rộng và cải tạo thường đòi hỏi giấy phép quy hoạch hoặc phê duyệt của hội đồng. Chúng tôi quản lý toàn bộ quy trình nộp đơn, liên hệ với các cơ quan liên quan để dự án của bạn được phê duyệt hiệu quả.',
    'Construction Oversight':               'Giám Sát Thi Công',
    'We stay involved during construction to ensure the build matches the design intent. Regular site visits, progress reports, and coordination with your builder give you peace of mind.':
      'Chúng tôi tiếp tục tham gia trong quá trình thi công để đảm bảo công trình phù hợp với ý định thiết kế. Các chuyến thăm công trường thường xuyên, báo cáo tiến độ và phối hợp với nhà thầu của bạn mang lại sự an tâm cho bạn.',

    // ===== BLOG LIST PAGE =====
    'Posts & Insights':             'Bài Viết & Chia Sẻ',
    'Expert knowledge on architectural design, planning, and building in Victoria':
      'Kiến thức chuyên sâu về thiết kế kiến trúc, quy hoạch và xây dựng tại Victoria',
    'Featured':                     'Nổi Bật',
    'Design Strategy':              'Chiến Lược Thiết Kế',
    'Planning':                     'Quy Hoạch',
    'Investment Strategy':          'Chiến Lược Đầu Tư',
    'Essential':                    'Cần Biết',
    'Permits & Approvals':          'Giấy Phép & Phê Duyệt',
    'Why an Architect or Building Designer Is Your Best First Step':
      'Tại Sao Kiến Trúc Sư hoặc Nhà Thiết Kế Công Trình Là Bước Đầu Tiên Tốt Nhất',
    'When planning to build a home, hiring a registered Building Designer or Architect is the smartest move you can make.':
      'Khi lên kế hoạch xây nhà, thuê một Nhà Thiết Kế Công Trình hoặc Kiến Trúc Sư có đăng ký là quyết định thông minh nhất bạn có thể thực hiện.',
    'Volume vs. Custom Home Building in Victoria: The True Cost of Going "Cheap"':
      'Xây Nhà Hàng Loạt vs. Nhà Thiết Kế Riêng tại Victoria: Chi Phí Thực Sự Khi Chọn Nhà "Rẻ"',
    'Volume builders look cheap upfront, but structural variation fees can add $50,000–$100,000 to your final bill.':
      'Nhà xây hàng loạt trông rẻ ban đầu, nhưng các khoản phí thay đổi kết cấu có thể cộng thêm $50,000–$100,000 vào hóa đơn cuối cùng của bạn.',
    'Planning Permit vs. Building Permit in Victoria: What\'s the Difference?':
      'Giấy Phép Quy Hoạch vs. Giấy Phép Xây Dựng tại Victoria: Sự Khác Biệt Là Gì?',
    'These two permits are governed by entirely different laws, assessed by different authorities, and serve completely different purposes.':
      'Hai loại giấy phép này được điều chỉnh bởi các luật hoàn toàn khác nhau, được đánh giá bởi các cơ quan khác nhau và phục vụ các mục đích hoàn toàn khác nhau.',
    'Read Article':                 'Đọc Bài Viết',

    // ===== CONTACT PAGE =====
    'Contact':                      'Liên Hệ',
    'Get in Touch':                 'Liên Hệ Với Chúng Tôi',
    'Hours: Mon - Fri\n9:00 AM - 5:00 PM':
      'Giờ làm việc: Thứ 2 - Thứ 6\n9:00 SA - 5:00 CH',
    'Full Name':                    'Họ và Tên',
    'Email':                        'Email',
    'Phone Number':                 'Số Điện Thoại',
    'Subject':                      'Chủ Đề',
    'Your message...':              'Tin nhắn của bạn...',
    'Send Message':                 'Gửi Tin Nhắn',

    // ===== FOOTER (all pages) =====
    '© 2026 HATD Studio. All rights reserved.':
      '© 2026 HATD Studio. Bảo lưu mọi quyền.',
    '. All rights reserved.':       '. Bảo lưu mọi quyền.',
  };

  // ----------------------------------------------------------
  // STATE
  // ----------------------------------------------------------
  var currentLang = 'en';
  var originalValues = new Map(); // node → {type, original}

  // ----------------------------------------------------------
  // HELPERS
  // ----------------------------------------------------------

  function normaliseText(t) {
    return t.replace(/\s+/g, ' ').trim();
  }

  function getTranslation(text) {
    var norm = normaliseText(text);
    if (TRANSLATIONS[norm]) return TRANSLATIONS[norm];
    // try with raw text too
    if (TRANSLATIONS[text]) return TRANSLATIONS[text];
    return null;
  }

  // Collect all translatable text nodes and input placeholders
  function collectNodes() {
    var results = [];
    var seenElements = new Set();

    // --- ELEMENTS that contain <br> (match by innerText) ---
    // These can't be matched as plain text nodes because <br> splits them
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, td, th').forEach(function (el) {
      if (el.closest('script, style, #translateBtn, .header-translate-btn')) return;
      // Only target elements that contain a <br> child
      if (!el.querySelector('br')) return;
      var text = el.innerText.trim();
      if (!text || text.length < 2) return;
      var translation = getTranslation(text);
      if (translation) {
        seenElements.add(el);
        results.push({ node: el, type: 'element-br' });
      }
    });

    // --- TEXT NODES inside regular elements ---
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          var parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          var tag = parent.tagName.toLowerCase();
          // Skip scripts, styles, hidden elements
          if (['script', 'style', 'noscript'].includes(tag)) return NodeFilter.FILTER_REJECT;
          // Skip translate button itself
          if (parent.closest('#translateBtn, .header-translate-btn')) return NodeFilter.FILTER_REJECT;
          // Skip if parent element was already handled as element-br
          if (seenElements.has(parent)) return NodeFilter.FILTER_REJECT;
          var text = node.textContent.trim();
          if (!text || text.length < 2) return NodeFilter.FILTER_SKIP;
          if (getTranslation(text)) return NodeFilter.FILTER_ACCEPT;
          return NodeFilter.FILTER_SKIP;
        }
      }
    );

    var node;
    while ((node = walker.nextNode())) {
      results.push({ node: node, type: 'text' });
    }

    // --- INPUT / TEXTAREA PLACEHOLDERS ---
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function (el) {
      var ph = el.getAttribute('placeholder');
      if (ph && getTranslation(ph)) {
        results.push({ node: el, type: 'placeholder' });
      }
    });

    return results;
  }

  // ----------------------------------------------------------
  // APPLY / RESTORE
  // ----------------------------------------------------------

  function applyVI() {
    var nodes = collectNodes();
    nodes.forEach(function (item) {
      var original, translation;

      if (item.type === 'element-br') {
        original = item.node.innerText.trim();
        translation = getTranslation(original);
        if (translation) {
          originalValues.set(item.node, { type: 'element-br', original: item.node.innerHTML });
          // Replace inner text but keep <br> tags: split by \n in translation
          var parts = translation.split('\n');
          item.node.innerHTML = parts.join('<br>');
        }
      } else if (item.type === 'text') {
        original = item.node.textContent;
        translation = getTranslation(original);
        if (translation) {
          originalValues.set(item.node, { type: 'text', original: original });
          item.node.textContent = translation;
        }
      } else if (item.type === 'placeholder') {
        original = item.node.getAttribute('placeholder');
        translation = getTranslation(original);
        if (translation) {
          originalValues.set(item.node, { type: 'placeholder', original: original });
          item.node.setAttribute('placeholder', translation);
        }
      }
    });

    document.documentElement.lang = 'vi';
    currentLang = 'vi';
  }

  function restoreEN() {
    originalValues.forEach(function (data, node) {
      if (data.type === 'element-br') {
        node.innerHTML = data.original;
      } else if (data.type === 'text') {
        node.textContent = data.original;
      } else if (data.type === 'placeholder') {
        node.setAttribute('placeholder', data.original);
      }
    });
    originalValues.clear();
    document.documentElement.lang = 'en';
    currentLang = 'en';
  }

  // ----------------------------------------------------------
  // PUBLIC TOGGLE  (replaces toggleTranslate in main.js)
  // ----------------------------------------------------------

  window.toggleTranslate = function () {
    var btn = document.getElementById('translateBtn');
    if (!btn) return;

    if (currentLang === 'en') {
      applyVI();
      btn.innerHTML = '<i class="fas fa-globe"></i> English';
      localStorage.setItem('hatd_lang', 'vi');
      // Sync blog detail lang buttons if on a blog page
      syncBlogLang('vi');
    } else {
      restoreEN();
      btn.innerHTML = '<i class="fas fa-globe"></i> Tiếng Việt';
      localStorage.setItem('hatd_lang', 'en');
      syncBlogLang('en');
    }
  };

  function syncBlogLang(lang) {
    document.querySelectorAll('.blog-detail').forEach(function(container) {
      container.querySelectorAll('.lang-btn').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });
      var titleEn = container.querySelector('.post-title-en');
      var titleVi = container.querySelector('.post-title-vi');
      if (titleEn && titleVi) {
        titleEn.style.display = lang === 'en' ? 'block' : 'none';
        titleVi.style.display = lang === 'vi' ? 'block' : 'none';
      }
      container.querySelectorAll('.post-content-lang').forEach(function(c) {
        c.classList.toggle('active', c.getAttribute('data-lang') === lang);
      });
    });
  }

  // ----------------------------------------------------------
  // AUTO-APPLY on page load if user previously chose VI
  // ----------------------------------------------------------

  document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('hatd_lang') === 'vi') {
      applyVI();
      var btn = document.getElementById('translateBtn');
      if (btn) btn.innerHTML = '<i class="fas fa-globe"></i> English';
    }
  });


})();
