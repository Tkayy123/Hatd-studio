// ============================================================
// HATd STUDIO — STATIC TRANSLATION SYSTEM (EN ↔ VI)
// Covers ALL pages with accurate, hand-written Vietnamese
// ============================================================

(function () {
  'use strict';

  // ----------------------------------------------------------
  // KEY-BASED TRANSLATIONS  (for elements marked data-i18n="key")
  // These are matched by a stable key, not by text content, so
  // they never break due to special characters (—, curly quotes,
  // <br> splitting text nodes, etc.) or encoding differences
  // between local files and production builds.
  // ----------------------------------------------------------

  var TRANSLATIONS_BY_KEY = {
    'sub-quote': {
      en: 'Building designer & architect in Springvale, Melbourne —<br>specialising in residential design that adapts to your way of life, from classic restorations to contemporary new builds.',
      vi: 'Nhà thiết kế xây dựng & kiến trúc sư tại Springvale, Melbourne —<br>chuyên thiết kế nhà ở phù hợp với lối sống của bạn, từ cải tạo nhà cổ điển đến xây mới hiện đại.'
    },
    'about-desc-new': {
      en: 'HATd Studio is a <strong>building designer and architect based in Springvale, Melbourne</strong>, helping homeowners and businesses across Victoria bring their vision to life. From <strong>residential architecture and custom home design</strong> to <strong>commercial building design &amp; fit-out</strong> and <strong>home extensions &amp; renovations</strong>, we balance bold modern concepts with understated, effortless elegance, ensuring that every clean line serves a purpose. By merging striking architectural innovation with everyday functionality, we don\'t just design buildings—we thoughtfully craft sophisticated, enduring spaces that feel deeply personal and elevate the way you live.',
      vi: 'HATd Studio là <strong>nhà thiết kế xây dựng & kiến trúc sư có trụ sở tại Springvale, Melbourne</strong>, giúp các gia chủ và doanh nghiệp khắp Victoria hiện thực hóa tầm nhìn của mình. Từ <strong>kiến trúc nhà ở và thiết kế nhà theo yêu cầu</strong> đến <strong>thiết kế & lắp đặt công trình thương mại</strong> và <strong>mở rộng & cải tạo nhà ở</strong>, chúng tôi kết hợp những ý tưởng hiện đại táo bạo với vẻ thanh lịch tự nhiên, đảm bảo từng đường nét đều có ý nghĩa. Bằng cách hòa quyện sự đổi mới kiến trúc ấn tượng với chức năng thực tiễn hàng ngày, chúng tôi không chỉ thiết kế công trình — chúng tôi tạo ra những không gian tinh tế, bền vững và đậm dấu ấn cá nhân.'
    },
    'commercial-hero-title': {
      en: 'Commercial Project Design & <span style="white-space:nowrap">Fit-Out</span>',
      vi: 'Thiết Kế & Lắp Đặt Dự Án Thương Mại'
    }
  };

  // ----------------------------------------------------------
  // TRANSLATION MAP  (selector → [EN text, VI text])
  // Keys are CSS selectors; we match by textContent.trim()
  // ----------------------------------------------------------

  var TRANSLATIONS = {

    // ===== NAVIGATION (shared across all pages) =====
    'Gallery':                      'Thư Viện Ảnh',
    'Post':                         'Bài Viết',

    // ===== INDEX — HERO SLIDER =====
    'Architecture':                 'Kiến Trúc',
    'Creating thoughtful architecture with precision and expertise.':
      'Kiến trúc được thiết kế tỉ mỉ với sự chính xác và chuyên môn cao.',
    'Specialising in residential design that adapts to your way of life —from classic restorations to contemporary new builds.':
      'Chuyên thiết kế nhà ở phù hợp với lối sống của bạn — từ cải tạo nhà cổ điển đến xây mới hiện đại.',
    'Explore Projects':             'Khám Phá Dự Án',
    'Learn More':                   'Tìm Hiểu Thêm',

    // ===== INDEX — ABOUT SECTION =====
    'About Us':                     'Về Chúng Tôi',
    'Architecture that endures generations':
      'Kiến trúc bền vững qua nhiều thế hệ',
    'Years Experience':             'Năm Kinh Nghiệm',
    'Projects Completed':           'Dự Án Hoàn Thành',
    'Client Satisfaction':          'Sự Hài Lòng Của Khách',

    // ===== INDEX — TESTIMONIALS =====
    'Testimonials':                 'Đánh Giá Khách Hàng',
    'What our clients say':         'Khách hàng nói gì về chúng tôi',
    '"HATd Studio transformed our vision into reality. Their attention to detail and commitment to quality was evident at every stage. The team navigated complex approvals seamlessly and delivered a home that exceeds our expectations."':
      '"HATd Studio đã biến tầm nhìn của chúng tôi thành hiện thực. Sự chú ý đến từng chi tiết và cam kết về chất lượng thể hiện rõ ở mọi giai đoạn. Đội ngũ xử lý các thủ tục phức tạp một cách trơn tru và bàn giao một ngôi nhà vượt ngoài mong đợi của chúng tôi."',
    'Residential Client, Melbourne': 'Khách hàng Nhà Ở, Melbourne',
    '"Working with HATd Studio was effortless. They understood our brand identity and translated it perfectly into our new flagship store. The fit-out was completed on time and within budget. Highly recommended."':
      '"Làm việc với HATd Studio thật dễ dàng. Họ hiểu đúng bản sắc thương hiệu của chúng tôi và thể hiện hoàn hảo vào cửa hàng flagship mới. Công trình hoàn thành đúng tiến độ và trong ngân sách. Rất khuyến khích."',
    'Commercial Client, Melbourne': 'Khách hàng Thương Mại, Melbourne',
    '"The renovation of our period home was a complex project, but HATd Studio handled everything with professionalism and care. They respected the original character while introducing modern functionality. The result is stunning."':
      '"Việc cải tạo ngôi nhà cổ của chúng tôi là một dự án phức tạp, nhưng HATd Studio đã xử lý mọi thứ chuyên nghiệp và tận tâm. Họ tôn trọng kiến trúc gốc trong khi đưa vào chức năng hiện đại. Kết quả thật tuyệt vời."',
    'Renovation Client, Melbourne':  'Khách hàng Cải Tạo, Melbourne',
    '"HATd Studio made the whole process so easy to understand from start to finish. They listened carefully to what our family needed and delivered a home that feels warm, functional and truly ours."':
      '"HATd Studio giúp cả quá trình dễ hiểu từ đầu đến cuối. Họ lắng nghe kỹ nhu cầu của gia đình tôi và bàn giao một ngôi nhà ấm cúng, tiện dụng và thực sự mang dấu ấn riêng."',
    '"From the first meeting to the final handover, HATd Studio was professional, responsive and genuinely invested in getting our shop fit-out right. We couldn\'t be happier with the result."':
      '"Từ buổi gặp đầu tiên đến khi bàn giao, HATd Studio luôn chuyên nghiệp, phản hồi nhanh và thực sự tâm huyết để hoàn thiện cửa hàng của chúng tôi. Chúng tôi rất hài lòng với kết quả."',

    // ===== GALLERY PAGE — <br> variants (matched via innerText) =====

    // ===== INDEX — <br> variants =====
    'COMMERCIAL PROJECT\nDESIGN & FIT-OUT': 'DỰ ÁN THƯƠNG MẠI\nTHIẾT KẾ & LẮP ĐẶT',
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
    'Exterior':                     'Ngoại Thất',
    'Interior':                     'Nội Thất',
    'Start Your Project →':         'Bắt Đầu Dự Án →',

    // ===== SERVICES PAGE =====
    'Our Process':                  'Quy Trình Làm Việc',
    'Every project starts with a conversation. We take the time to understand how you live, what you need from the space, and what\'s driving the project — then walk the site together to see what\'s realistically possible before a single line is drawn.':
      'Mọi dự án đều bắt đầu bằng một cuộc trò chuyện. Chúng tôi dành thời gian để hiểu cách bạn sinh sống, nhu cầu thực sự với không gian và động lực đằng sau dự án — sau đó cùng bạn khảo sát thực địa để biết điều gì thực sự khả thi trước khi vẽ bất kỳ đường nét nào.',
    'We sketch, model, and test ideas until the layout genuinely fits your lifestyle and budget. Nothing moves to documentation until you\'re happy with the direction — this is where the character of the project is set.':
      'Chúng tôi phác thảo, dựng mô hình và thử nghiệm ý tưởng cho đến khi bố cục thực sự phù hợp với lối sống và ngân sách của bạn. Không gì được chuyển sang giai đoạn hồ sơ cho đến khi bạn hài lòng với định hướng — đây là nơi tính cách của dự án được định hình.',
    'Where council approval is needed, we prepare the plans and reports, and deal directly with planning officers on your behalf — aiming for a smooth approval that keeps your design intact.':
      'Khi cần sự phê duyệt của hội đồng, chúng tôi chuẩn bị bản vẽ và báo cáo, đồng thời làm việc trực tiếp với cán bộ quy hoạch thay mặt bạn — hướng tới sự phê duyệt suôn sẻ mà vẫn giữ nguyên vẹn thiết kế.',
    'Once the design is settled, we produce the detailed drawings a builder can actually price and build from — covering structural, energy, and compliance requirements so nothing gets left to guesswork on site.':
      'Khi thiết kế đã được chốt, chúng tôi thực hiện các bản vẽ chi tiết để nhà thầu có thể báo giá và thi công — bao gồm các yêu cầu về kết cấu, năng lượng và tuân thủ quy định, để không có gì bị bỏ ngỏ trên công trường.',
    'Our involvement doesn\'t end at approval. We stay on hand through construction — checking in on progress, answering builder questions, and helping keep the finished result true to the design.':
      'Sự đồng hành của chúng tôi không dừng lại ở khâu phê duyệt. Chúng tôi luôn sẵn sàng trong suốt quá trình thi công — theo dõi tiến độ, giải đáp thắc mắc của nhà thầu và giúp đảm bảo kết quả cuối cùng đúng với thiết kế.',
    'Custom homes, villas, and premium apartments in Springvale & Melbourne with optimized functionality and aesthetics.':
      'Nhà phố, biệt thự và căn hộ cao cấp tại Springvale & Melbourne với chức năng tối ưu và thẩm mỹ vượt trội.',
    'Professional office, showroom, retail, and restaurant design across Melbourne that attracts customers.':
      'Thiết kế văn phòng, showroom, bán lẻ và nhà hàng chuyên nghiệp khắp Melbourne thu hút khách hàng.',
    'Renovate, upgrade, and expand your living space in Springvale & Melbourne with a fresh new look.':
      'Cải tạo, nâng cấp và mở rộng không gian sống của bạn tại Springvale & Melbourne với diện mạo mới mẻ.',

    // ===== SERVICES — RESIDENTIAL PAGE =====
    'Services':                             'Dịch Vụ',
    'Residential Project':                  'Dự Án Nhà Ở',
    'Custom homes, villas, and premium apartments':
      'Nhà phố, biệt thự và căn hộ cao cấp theo yêu cầu',
    'Home':                                 'Trang Chủ',
    'We spend most of our time designing homes people actually live in day to day, based in Springvale and servicing Melbourne and Victoria — that\'s the lens everything else runs through. From classic restorations to contemporary new builds, every project is shaped by your way of life.':
      'Phần lớn thời gian của chúng tôi là thiết kế những ngôi nhà mà mọi người thực sự sinh sống hằng ngày, có trụ sở tại Springvale, phục vụ Melbourne và Victoria — đó là góc nhìn xuyên suốt mọi quyết định thiết kế. Từ cải tạo nhà cổ điển đến xây mới hiện đại, mọi dự án đều được định hình theo lối sống của bạn.',
    'Site & Feasibility Review':            'Khảo Sát Địa Điểm & Khả Thi',
    'Before any design work begins, we walk the site with you and assess what the block will realistically allow — orientation, overlays, easements, and council constraints. This early groundwork means you know what\'s achievable before committing further, saving time and cost down the line.':
      'Trước khi bắt đầu thiết kế, chúng tôi cùng bạn khảo sát thực địa và đánh giá những gì khu đất thực sự cho phép — hướng nhà, các lớp quy hoạch, ranh giới sử dụng đất và các ràng buộc của hội đồng địa phương. Bước nền tảng này giúp bạn biết rõ điều gì khả thi trước khi tiến xa hơn, tiết kiệm thời gian và chi phí về sau.',
    'Design Development':                   'Phát Triển Thiết Kế',
    'This is where your brief becomes a home. We sketch, model, and refine layouts that suit how you actually live — not a generic floor plan. Whether it\'s a single dwelling or a multi-unit site, we keep the design grounded in both lifestyle and practicality.':
      'Đây là giai đoạn ý tưởng của bạn trở thành ngôi nhà thực sự. Chúng tôi phác thảo, dựng mô hình và tinh chỉnh bố cục phù hợp với cách bạn thực sự sinh sống — không phải một mặt bằng rập khuôn. Dù là một căn nhà đơn lẻ hay khu đất nhiều căn hộ, thiết kế luôn bám sát lối sống và tính thực tiễn.',
    'Planning Permit Support':              'Hỗ Trợ Xin Giấy Phép Quy Hoạch',
    'When council approval is needed, we handle the paperwork so you don\'t have to — preparing plans, written reports, and liaising directly with planning officers. Our goal is a smooth approval that doesn\'t water down your design.':
      'Khi cần sự phê duyệt của hội đồng, chúng tôi lo toàn bộ giấy tờ để bạn không phải bận tâm — chuẩn bị bản vẽ, báo cáo văn bản và làm việc trực tiếp với cán bộ quy hoạch. Mục tiêu của chúng tôi là đạt được phê duyệt suôn sẻ mà không làm giảm chất lượng thiết kế.',
    'Working Drawings':                     'Bản Vẽ Thi Công',
    'Once the design is locked in, we produce the detailed drawings your builder will actually work from — covering the technical junctions and specifications that keep a build on schedule and free of costly surprises.':
      'Khi thiết kế đã được chốt, chúng tôi thực hiện các bản vẽ chi tiết mà nhà thầu sẽ trực tiếp sử dụng để thi công — bao gồm các chi tiết kỹ thuật và thông số kỹ thuật giúp công trình đúng tiến độ và tránh phát sinh chi phí bất ngờ.',
    'Builder Selection Support':            'Hỗ Trợ Lựa Chọn Nhà Thầu',
    'Choosing the right builder matters as much as the design itself. We help you compare quotes and match with a builder suited to your project\'s scale and budget, so you head into construction with confidence.':
      'Việc chọn đúng nhà thầu quan trọng không kém gì bản thân thiết kế. Chúng tôi giúp bạn so sánh báo giá và tìm nhà thầu phù hợp với quy mô và ngân sách dự án, để bạn bước vào giai đoạn thi công với sự tự tin.',
    'On-Site Support During Construction':  'Hỗ Trợ Tại Công Trường Khi Thi Công',
    'A home is only built once. We stay involved after documentation is complete — checking in on site, answering builder queries, and making sure what gets built matches what was designed.':
      'Một ngôi nhà chỉ được xây một lần. Chúng tôi tiếp tục đồng hành sau khi hoàn tất hồ sơ — thăm công trường, giải đáp thắc mắc của nhà thầu, và đảm bảo công trình thực tế đúng với thiết kế đã đề ra.',
    'Ready to start your project?':         'Bạn đã sẵn sàng bắt đầu dự án?',
    'Get in touch with our team to discuss your vision.':
      'Liên hệ với đội ngũ của chúng tôi để thảo luận về ý tưởng của bạn.',
    'Request Consultation →':               'Yêu Cầu Tư Vấn →',

    // ===== SERVICES — COMMERCIAL PAGE =====
    'Commercial Project Design & Fit-Out':            'Thiết Kế & Lắp Đặt Dự Án Thương Mại',
    'Office, showroom, retail, and restaurant design':
      'Thiết kế văn phòng, showroom, bán lẻ và nhà hàng',
    'Based in Springvale and servicing Melbourne & Victoria, we design commercial spaces that work as hard as your business does — laid out for smooth daily operations, built around your brand, and signed off without compliance headaches. From boutique retail to large-format office spaces, we create environments that work for your business and leave a lasting impression on your clients.':
      'Có trụ sở tại Springvale và phục vụ Melbourne & Victoria, chúng tôi thiết kế không gian thương mại vận hành hiệu quả như chính doanh nghiệp của bạn — bố cục cho hoạt động hằng ngày trơn tru, xây dựng quanh bản sắc thương hiệu, và được phê duyệt mà không gặp rắc rối về tuân thủ quy định. Từ bán lẻ boutique đến không gian văn phòng quy mô lớn, chúng tôi tạo ra môi trường phù hợp với doanh nghiệp của bạn và để lại ấn tượng lâu dài với khách hàng.',
    'Commercial Design':                    'Thiết Kế Thương Mại',
    'Every commercial fit-out we take on has to earn its keep — a layout that supports how staff and customers actually move through the space, a brand that comes through in the details, and documentation clean enough to get through council without delay.':
      'Mỗi công trình lắp đặt thương mại chúng tôi nhận đều phải phát huy giá trị thực sự — một bố cục hỗ trợ cách nhân viên và khách hàng thực sự di chuyển trong không gian, một thương hiệu thể hiện qua từng chi tiết, và hồ sơ đủ rõ ràng để qua hội đồng mà không bị trì hoãn.',
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
    'As building designers based in Springvale, servicing Melbourne and Victoria, we believe in the power of transformation. Whether you\'re extending your family home, renovating a tired space, or restoring a period property, our team brings the same precision and care to every project — respecting what exists while introducing new possibilities.':
      'Là những nhà thiết kế công trình có trụ sở tại Springvale, phục vụ Melbourne và Victoria, chúng tôi tin vào sức mạnh của sự chuyển đổi. Dù bạn đang mở rộng ngôi nhà gia đình, cải tạo không gian cũ kỹ hay phục hồi nhà cổ, đội ngũ của chúng tôi mang đến sự chính xác và tỉ mỉ như nhau cho mọi dự án — tôn trọng những gì đã có trong khi giới thiệu những khả năng mới.',
    'Home Extensions':                      'Mở Rộng Nhà Ở',
    'Old and new should sit together as one house, not two eras stitched side by side. We keep what makes the original home feel like itself, and design the new part to work with that logic — not just match the roofline.':
      'Phần cũ và phần mới nên hòa làm một ngôi nhà, chứ không phải hai giai đoạn ghép cạnh nhau. Chúng tôi giữ lại những gì làm nên bản sắc của ngôi nhà gốc, và thiết kế phần mới theo đúng logic đó — chứ không chỉ khớp đường mái.',
    'Renovations':                          'Cải Tạo',
    'A good renovation plan solves problems the current layout has been quietly causing for years. We work with what your home already has, so the finished result is easier to build and adds real value, not just a fresh coat of paint.':
      'Một kế hoạch cải tạo tốt giải quyết những vấn đề mà bố cục hiện tại đã âm thầm gây ra suốt nhiều năm. Chúng tôi tận dụng những gì ngôi nhà bạn đã có, để kết quả cuối cùng dễ thi công hơn và mang lại giá trị thực sự, chứ không chỉ là một lớp sơn mới.',
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
    'Volume & Custom Home Building in Victoria: The True Cost of Going "Cheap"':
      'Xây Nhà Hàng Loạt & Nhà Thiết Kế Riêng tại Victoria: Chi Phí Thực Sự Khi Chọn Nhà "Rẻ"',
    'Volume builders look cheap upfront, but structural variation fees can add $50,000–$100,000 to your final bill.':
      'Nhà xây hàng loạt trông rẻ ban đầu, nhưng các khoản phí thay đổi kết cấu có thể cộng thêm $50,000–$100,000 vào hóa đơn cuối cùng của bạn.',
    'Planning Permit & Building Permit in Victoria: What\'s the Difference?':
      'Giấy Phép Quy Hoạch & Giấy Phép Xây Dựng tại Victoria: Sự Khác Biệt Là Gì?',
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
    'Services Interested In':       'Dịch Vụ Quan Tâm',
    'Your message...':              'Tin nhắn của bạn...',
    'Send Message':                 'Gửi Tin Nhắn',

    // ===== SERVICES PAGE — OUR PROCESS (title-case step labels, matching actual HTML) =====
    'Step 01':                      'Bước 01',
    'Initial Consultation':         'Tư Vấn Ban Đầu',
    'Step 02':                      'Bước 02',
    'Concept & Design':             'Ý Tưởng & Thiết Kế',
    'Step 03':                      'Bước 03',
    'Planning & Permits':           'Quy Hoạch & Giấy Phép',
    'Step 04':                      'Bước 04',
    'Construction Drawings':        'Bản Vẽ Thi Công',
    'Step 05':                      'Bước 05',
    'Build Support':                'Đồng Hành Thi Công',

    // ===== GALLERY PAGE — FILTER & CTA =====
    'All':                          'Tất Cả',
    'Start your project':           'Bắt Đầu Dự Án Của Bạn',
    'Tell us your vision — we\'ll bring it to life.':
      'Hãy chia sẻ tầm nhìn của bạn — chúng tôi sẽ hiện thực hóa nó.',
    'Get in touch →':               'Liên Hệ Ngay →',

    // ===== FOOTER (all pages) =====
    '© 2026 HATd Studio. All rights reserved.':
      '© 2026 HATd Studio. Mọi quyền đã được bảo lưu.',
    '. All rights reserved.':       '. Mọi quyền đã được bảo lưu.',
    'Building designer & architect based in Springvale, servicing Melbourne. Thoughtful architecture and interior design for homes and businesses, balancing bold concepts with timeless craftsmanship.':
      'Nhà thiết kế xây dựng & kiến trúc sư có trụ sở tại Springvale, phục vụ Melbourne. Kiến trúc và thiết kế nội thất tỉ mỉ cho nhà ở và doanh nghiệp, cân bằng giữa ý tưởng táo bạo và sự tinh xảo vượt thời gian.',
    'Follow Us':                    'Theo Dõi Chúng Tôi',
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

    // --- KEY-BASED ELEMENTS (data-i18n="key") — most reliable ---
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (TRANSLATIONS_BY_KEY[key]) {
        seenElements.add(el);
        results.push({ node: el, type: 'key', key: key });
      }
    });

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

      if (item.type === 'key') {
        var entry = TRANSLATIONS_BY_KEY[item.key];
        if (entry) {
          originalValues.set(item.node, { type: 'key', original: item.node.innerHTML });
          item.node.innerHTML = entry.vi;
        }
      } else if (item.type === 'element-br') {
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
      if (data.type === 'key') {
        node.innerHTML = data.original;
      } else if (data.type === 'element-br') {
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
      if (typeof window.setTypingLanguage === 'function') window.setTypingLanguage('vi');
    } else {
      restoreEN();
      btn.innerHTML = '<i class="fas fa-globe"></i> Tiếng Việt';
      localStorage.setItem('hatd_lang', 'en');
      syncBlogLang('en');
      if (typeof window.setTypingLanguage === 'function') window.setTypingLanguage('en');
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
  // AUTO-APPLY VI on load if user previously chose Vietnamese
  // ----------------------------------------------------------
  // We wait until the hero typing/slider animation has finished
  // its first render pass before translating. Applying instantly
  // on DOMContentLoaded raced against that animation (elements
  // not yet laid out when translate.js read innerText), which
  // occasionally left some lines translated and others not —
  // showing English and Vietnamese mixed together on the same
  // slide. A short delay lets layout settle first.

  function autoApplySavedLang() {
    if (localStorage.getItem('hatd_lang') === 'vi') {
      applyVI();
      var btn = document.getElementById('translateBtn');
      if (btn) btn.innerHTML = '<i class="fas fa-globe"></i> English';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Defer past the hero typing/slider init so all text nodes
    // are fully laid out (and innerText reads correctly) before
    // we scan and translate the page.
    window.setTimeout(autoApplySavedLang, 300);
  });


})();
