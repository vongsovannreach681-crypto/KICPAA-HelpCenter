import tq1Book from "../assets/images/book/tq1.png";
import tq2Book from "../assets/images/book/tq2.png";
import tq3Book from "../assets/images/book/tq3.png";
import tq4Book from "../assets/images/book/tq4.png";

export const getPrinciplesBooks = (isKhmer) => [
  {
    id: 1,
    name: isKhmer
      ? "TQ1: ការកាន់បញ្ជីគណនេយ្យ"
      : "TQ1: Bookkeeping, accounting and controls",
    des: isKhmer
      ? "មុខវិជ្ជានេះណែនាំបេក្ខជនឱ្យយល់ដឹងអំពីតម្រូវការដំណើរការសំខាន់ៗ ដើម្បីគាំទ្រដល់ការកត់ត្រាបញ្ជីគណនេយ្យ និងការយល់ដឹងអំពីការត្រួតពិនិត្យផ្ទៃក្នុងគណនេយ្យចាំបាច់ ដើម្បីរក្សានូវសុចរិតភាពនៃប្រព័ន្ធគណនេយ្យ។ កំណត់ត្រា និងការណែនាំអំពីការប្រើប្រាស់ឯកសារគណនេយ្យ និងអាជីវកម្ម នឹងជួយឱ្យអាចរៀបចំរបាយការណ៍ហិរញ្ញវត្ថុបាន។"
      : "This module introduces candidates to the key processing requirements to support accounting record keeping and to recognise the key accounting controls required to maintain the integrity of accounting systems. The records and introduction to the use of accounting and business documents will enable the production of financial statements.",
    list: isKhmer
      ? [
          "ពន្យល់អំពីលក្ខណៈនៃការកត់ត្រាបញ្ជីគណនេយ្យ និងតួនាទីរបស់វានៅក្នុងអាជីវកម្ម",
          "កំណត់អត្តសញ្ញាណ និងពន្យល់អំពីប្រតិបត្តិការហិរញ្ញវត្ថុសំខាន់ៗនៅក្នុងអាជីវកម្ម",
          "កំណត់អត្តសញ្ញាណ និងពន្យល់អំពីសៀវភៅ និងបញ្ជីសំខាន់ៗនៅក្នុងប្រព័ន្ធកត់ត្រាបញ្ជី",
          "រៀបរាប់អំពីប្រតិបត្តិការរបស់អតិថិជន និងអ្នកផ្គត់ផ្គង់ ព្រមទាំងឯកសារដែលពាក់ព័ន្ធ",
          "កត់ត្រាប្រតិបត្តិការអតិថិជន និងអ្នកផ្គត់ផ្គង់ក្នុងប្រព័ន្ធកត់ត្រាបញ្ជីទ្វេភាគ",
          "រៀបចំតារាងតុល្យការសាកល្បងសម្រាប់រយៈពេលនៃប្រតិបត្តិការ",
        ]
      : [
          "Explain the nature of bookkeeping and its function within a business",
          "Identify and explain the key financial transactions within a business",
          "Identify and explain the key books and ledgers within a bookkeeping system",
          "Describe customer and supplier transactions and the documentation these create",
          "Record customer and supplier transactions in a double entry bookkeeping system",
          "Create a trial balance for a period of transactions",
        ],
    category: isKhmer ? "កម្រិតមូលដ្ឋានគ្រិះ" : "Principles Level",
    image: tq1Book,
    syllabusCoverage: [
      {
        code: "A",
        topic: isKhmer
          ? "ពន្យល់អំពីលក្ខណៈនៃការកត់ត្រាបញ្ជីគណនេយ្យ និងតួនាទីក្នុងអាជីវកម្ម"
          : "Explain the nature of bookkeeping and its function within a business",
        weight: 5,
      },
      {
        code: "B",
        topic: isKhmer
          ? "កំណត់ និងពន្យល់ប្រតិបត្តិការហិរញ្ញវត្ថុសំខាន់ៗក្នុងអាជីវកម្ម"
          : "Identify and explain the key financial transactions within a business",
        weight: 5,
      },
      {
        code: "C",
        topic: isKhmer
          ? "កំណត់ និងពន្យល់សៀវភៅ និងបញ្ជីសំខាន់ៗក្នុងប្រព័ន្ធកត់ត្រាបញ្ជី"
          : "Identify and explain the key books and ledgers within a bookkeeping system",
        weight: 10,
      },
      {
        code: "D",
        topic: isKhmer
          ? "កត់ត្រាប្រតិបត្តិការអតិថិជន និងអ្នកផ្គត់ផ្គង់ក្នុងប្រព័ន្ធកត់ត្រាបញ្ជីទ្វេភាគ"
          : "Record customer and supplier transactions in a double entry bookkeeping system",
        weight: 40,
      },
      {
        code: "E",
        topic: isKhmer
          ? "ពន្យល់ និងអនុវត្តគណនីត្រួតពិនិត្យ និងការប្រើប្រាស់សៀវភៅទិន្នានុប្បវត្តិ"
          : "Explain and apply control accounts and the use of journals",
        weight: 20,
      },
      {
        code: "F",
        topic: isKhmer
          ? "រៀបចំតារាងតុល្យការសាកល្បងសម្រាប់រយៈពេលប្រតិបត្តិការ"
          : "Create a trial balance for a period of transactions",
        weight: 20,
      },
    ],
  },
  {
    id: 2,
    name: isKhmer
      ? "TQ2: ជំនាញបច្ចេកវិទ្យាកុំព្យូទ័រ និងកម្មវិធីសូហ្វវែគណនេយ្យ"
      : "TQ2: IT skills and software",
    des: isKhmer
      ? "សិស្សនឹងត្រូវបានណែនាំអំពីមុខងារសំខាន់ៗនៃកម្មវិធី QuickBooks និង Microsoft Office ជាពិសេស Excel, WORD និងអ៊ីមែល។ ការណ៍នេះនឹងជួយឱ្យបេក្ខជនអាចសម្របខ្លួនបានយ៉ាងងាយស្រួលទៅក្នុងបរិយាកាសការិយាល័យ និងធានាថាកំណត់ត្រាគណនេយ្យ និងឯកសារពាក់ព័ន្ធត្រូវបានថែរក្សាតាមស្តង់ដារអាជីវកម្មទំនើប។"
      : "Students will be introduced to the key functionalities of QuickBooks, and Microsoft Office, notably Excel, WORD and email. This will allow candidates to integrate easily into an office environment and to ensure that accounting records and related documents are maintained to modern business standards.",
    list: isKhmer
      ? [
          "រៀបរាប់អំពីបរិយាកាសការិយាល័យ និងគណនេយ្យ ព្រមទាំងកំណត់មុខងារ និងដំណើរការការិយាល័យដែលទទួលបានអត្ថប្រយោជន៍ពីបច្ចេកវិទ្យាព័ត៌មាន",
          "រៀបរាប់ ពន្យល់ និងបង្ហាញពីមុខងារនៃកម្មវិធីគណនេយ្យ",
          "រៀបរាប់ ពន្យល់ និងបង្ហាញពីមុខងារនៃកម្មវិធីសៀវភៅបញ្ជី (Spreadsheet/Excel)",
          "កំណត់ និងបង្ហាញមុខងារ និងលក្ខណៈពិសេសសំខាន់ៗនៃកម្មវិធី WORD",
          "កំណត់ និងបង្ហាញមុខងារ និងលក្ខណៈពិសេសសំខាន់ៗនៃប្រព័ន្ធអ៊ីមែល",
        ]
      : [
          "Describe the office and accounting environment and identify the office functions and processes that benefit from information technology",
          "Describe, explain and demonstrate the functionality of accounting software",
          "Describe, explain and demonstrate the functionality of spreadsheet software",
          "Identify and demonstrate the key features and functionality of WORD",
          "Identify and demonstrate the key features and functionality of email",
        ],
    category: isKhmer ? "កម្រិតមូលដ្ឋាន" : "Principles Level",
    image: tq2Book,
    syllabusCoverage: [
      {
        code: "A",
        topic: isKhmer
          ? "បរិយាកាសការិយាល័យ និងតួនាទីនៃបច្ចេកវិទ្យាព័ត៌មាន"
          : "Office environment and the role of information technology",
        weight: 5,
      },
      {
        code: "B",
        topic: isKhmer
          ? "មុខងារ និងការប្រើប្រាស់កម្មវិធីគណនេយ្យ"
          : "Functionality and use of accounting software",
        weight: 40,
      },
      {
        code: "C",
        topic: isKhmer
          ? "មុខងារ និងការប្រើប្រាស់កម្មវិធីសៀវភៅបញ្ជី (Excel)"
          : "Functionality and use of spreadsheet software",
        weight: 35,
      },
      {
        code: "D",
        topic: isKhmer
          ? "មុខងារ និងការប្រើប្រាស់កម្មវិធី WORD"
          : "Functionality and use of WORD",
        weight: 10,
      },
      {
        code: "E",
        topic: isKhmer
          ? "មុខងារ និងការប្រើប្រាស់ប្រព័ន្ធអ៊ីមែល"
          : "Functionality and use of email",
        weight: 10,
      },
    ],
  },
  {
    id: 3,
    name: isKhmer
      ? "TQ3: ការសិក្សាអំពីការគណនាថ្លៃដើម"
      : "TQ3: Introduction to Costing",
    des: isKhmer
      ? "កម្មវិធីសិក្សាណែនាំបេក្ខជនអំពីធាតុផ្សំនៃការគិតថ្លៃដើមដែលត្រូវបានប្រើប្រាស់ដើម្បីធ្វើ និងគាំទ្រដល់ការសម្រេចចិត្ត ដោយចាប់ផ្តើមពីការណែនាំអំពីលក្ខណៈ និងប្រភពព័ត៌មាន ព្រមទាំងគោលបំណងនៃគណនេយ្យថ្លៃដើម និងបច្ចេកទេសគិតថ្លៃដើម។"
      : "The syllabus introduces candidates to elements of costing which are used to make and support decisions and begins with introducing the nature of and sources of information, and purpose of cost accounting and costing techniques.",
    list: isKhmer
      ? [
          "រៀបរាប់ និងពន្យល់ពីគោលបំណងនៃការគិតថ្លៃដើម របៀបដែលការគិតថ្លៃដើមដំណើរការ និងគាំទ្រដល់ស្ថាប័ន",
          "កំណត់និយមន័យ រៀបរាប់ និងពន្យល់ពីទិន្នន័យថ្លៃដើម របៀបប្រើប្រាស់ ធាតុផ្សំនៃថ្លៃដើម និងការចាត់ថ្នាក់ថ្លៃដើម",
          "រៀបរាប់ និងគណនារបៀបកត់ត្រាថ្លៃដើម",
          "រៀបចំថវិកាសាមញ្ញសម្រាប់ទាំងចំណូល និងចំណាយ",
          "គណនា និងពន្យល់ពីគម្លាតរវាងលទ្ធផលជាក់ស្តែង និងថវិកាដែលបានគ្រោងទុក",
        ]
      : [
          "Describe and explain the purpose of costing and how costing operates and supports an organisation",
          "Define, describe and explain what cost data is, how it is used, the elements of costs, and how costs are classified",
          "Describe and calculate how costs are recorded",
          "Prepare simple budgets for both revenue and costs",
          "Calculate and explain differences between actual performance and budgets",
        ],
    category: isKhmer ? "កម្រិតមូលដ្ឋាន" : "Principles Level",
    image: tq3Book,
    syllabusCoverage: [
      {
        code: "A",
        topic: isKhmer
          ? "គោលបំណងនៃការគិតថ្លៃដើម និងដំណើរការគាំទ្រស្ថាប័ន"
          : "Purpose of costing and how costing operates and supports an organisation",
        weight: 10,
      },
      {
        code: "B",
        topic: isKhmer
          ? "ទិន្នន័យថ្លៃដើម ការប្រើប្រាស់ ធាតុផ្សំ និងការចាត់ថ្នាក់ថ្លៃដើម"
          : "What cost data is, how it is used, the elements of costs, and how costs are classified",
        weight: 10,
      },
      {
        code: "C",
        topic: isKhmer
          ? "របៀបកត់ត្រាថ្លៃដើម"
          : "How costs are recorded",
        weight: 40,
      },
      {
        code: "D",
        topic: isKhmer
          ? "ថវិកាសាមញ្ញសម្រាប់ចំណូល និងចំណាយ"
          : "Simple budgets for both revenue and costs",
        weight: 20,
      },
      {
        code: "E",
        topic: isKhmer
          ? "គម្លាតរវាងលទ្ធផលជាក់ស្តែង និងថវិកា"
          : "Differences between actual performance and budgets",
        weight: 20,
      },
    ],
  },
  {
    id: 4,
    name: isKhmer
      ? "TQ4: ការសិក្សាអំពីអាជីវកម្ម"
      : "TQ4: Introduction to Business",
    des: isKhmer
      ? "ការគ្រប់គ្រងអាជីវកម្ម និងប្រព័ន្ធព័ត៌មានវិទ្យាណែនាំអំពីទម្រង់រចនាសម្ព័ន្ធ និងដំណើរការមូលដ្ឋាននៃអង្គភាពអាជីវកម្មនៅកម្ពុជា ព្រមទាំងកំណត់ឥទ្ធិពលនៃបរិយាកាសអាជីវកម្ម និងរបៀបដែលព័ត៌មានត្រូវបានគ្រប់គ្រងដើម្បីគាំទ្រដល់គោលដៅអាជីវកម្ម។ មុខវិជ្ជានេះពិចារណាយ៉ាងលម្អិតលើប្រភេទអង្គភាព គោលបំណង និងគោលដៅ របៀបដែលបរិយាកាសអាជីវកម្មជះឥទ្ធិពលលើការសម្រេចចិត្ត ដំណើរការរៀបចំផែនការ និងឥរិយាបថ ប្រតិបត្តិការអាជីវកម្មមូលដ្ឋាន និងគំរូអាជីវកម្មនានា។"
      : "Business Management and Information Systems introduces the basic structures and processes involved in organisations in Cambodia and identifies the impact of the business environments and how information is managed to support business objectives. It considers, in detail, entity types, their purpose and objectives; how the business environment influences business decisions; the business planning process and the impact of behavioural issues; the basic operations of a business; how information is used and managed; and concludes with a description of the basic business models used to support management decisions.",
    list: isKhmer
      ? [
          "រៀបរាប់អំពីប្រភេទអង្គភាពអាជីវកម្ម គោលបំណង និងគោលដៅរបស់ពួកគេ",
          "ពន្យល់ពីរចនាសម្ព័ន្ធ និងដំណើរការរៀបចំអាជីវកម្មមូលដ្ឋាន",
          "ពន្យល់អំពីរបៀបដែលបរិយាកាសអាជីវកម្មមានឥទ្ធិពលលើការសម្រេចចិត្តអាជីវកម្ម",
          "រៀបរាប់អំពីដំណើរការរៀបចំផែនការអាជីវកម្ម រួមទាំងផលប៉ះពាល់នៃបញ្ហាឥរិយាបថ",
          "ពន្យល់ពីប្រតិបត្តិការមូលដ្ឋាននៃមុខងារអាជីវកម្ម",
          "កំណត់ និងពន្យល់ពីរបៀបគ្រប់គ្រងព័ត៌មានអាជីវកម្ម",
          "រៀបរាប់ និងអនុវត្តគំរូអាជីវកម្មមូលដ្ឋានដើម្បីគាំទ្រដល់ការសម្រេចចិត្តរបស់ថ្នាក់គ្រប់គ្រង",
          "រៀបរាប់ និងពន្យល់អំពីបច្ចេកវិទ្យា Blockchain",
        ]
      : [
          "Describe entity types, their purpose and objectives",
          "Explain basic business organisational structures and processes",
          "Explain how the business environment influences business decisions",
          "Describe the business planning process, including the impact of behavioural issues",
          "Explain the basic operations of business functions",
          "Identify and explain how business information is managed",
          "Describe and apply basic business models to support management decisions",
          "Describe and explain blockchain technology",
        ],
    category: isKhmer ? "កម្រិតមូលដ្ឋាន" : "Principles Level",
    image: tq4Book,
    syllabusCoverage: [
      {
        code: "A",
        topic: isKhmer
          ? "ប្រភេទអង្គភាព គោលបំណង និងគោលដៅ"
          : "Entity types, purpose and objective",
        weight: 10,
      },
      {
        code: "B",
        topic: isKhmer
          ? "រចនាសម្ព័ន្ធ និងដំណើរការរបស់អង្គភាព"
          : "Organisational structures and processes",
        weight: 10,
      },
      {
        code: "C",
        topic: isKhmer
          ? "បរិយាកាសអាជីវកម្ម និងការសម្រេចចិត្ត"
          : "Business environment and decisions",
        weight: 10,
      },
      {
        code: "D",
        topic: isKhmer
          ? "ដំណើរការរៀបចំផែនការអាជីវកម្ម និងឥរិយាបថ"
          : "Business planning processes and behavior",
        weight: 20,
      },
      {
        code: "E",
        topic: isKhmer
          ? "ប្រតិបត្តិការ និងមុខងារអាជីវកម្ម"
          : "Operations and business functions",
        weight: 20,
      },
      {
        code: "F",
        topic: isKhmer
          ? "ការគ្រប់គ្រងព័ត៌មានអាជីវកម្ម"
          : "Business information management",
        weight: 10,
      },
      {
        code: "G",
        topic: isKhmer
          ? "គំរូអាជីវកម្ម និងការសម្រេចចិត្តគ្រប់គ្រង"
          : "Business models and management decisions",
        weight: 10,
      },
      {
        code: "H",
        topic: isKhmer
          ? "រៀបរាប់ និងពន្យល់បច្ចេកវិទ្យា Blockchain"
          : "Describe and explain blockchain technology",
        weight: 10,
      },
    ],
  },
];

export const getTechnicianBooks = (isKhmer) => [
  {
    id: 5,
    name: isKhmer
      ? "TQ5: ការរៀបចំរបាយការណ៍ហិរញ្ញវត្ថុ"
      : "TQ5: Financial statement preparation",
    des: isKhmer
      ? "ការរៀបចំរបាយការណ៍ហិរញ្ញវត្ថុត្រូវបានរៀបចំឡើងដើម្បីធានាថាបេក្ខជនមានការយល់ដឹងច្បាស់លាស់អំពីបច្ចេកទេសក្នុងការរៀបចំរបាយការណ៍ហិរញ្ញវត្ថុមិនស្មុគស្មាញ។ កម្មវិធីសិក្សាណែនាំបេក្ខជនអំពីមូលដ្ឋានគ្រឹះនៃក្របខ័ណ្ឌបទប្បញ្ញត្តិ និងលក្ខណៈគុណភាពនៃព័ត៌មាន ព្រមទាំងការកត់ត្រា ដំណើរការ និងរបាយការណ៍ហិរញ្ញវត្ថុសម្រាប់អង្គភាពសាជីវកម្ម និងមិនមែនសាជីវកម្ម។"
      : "Financial Statement Preparation is designed to ensure that candidates have a sound understanding of the techniques to support the preparation of non-complex financial statements. The syllabus introduces the candidate to the fundamentals of the regulatory framework relating to accounts preparation and to the qualitative characteristics of useful information, covers drafting financial statements and the principles of accounts preparation. The syllabus reinforces knowledge concerning the recording, processing, and reporting business transactions and events, use of the trial balance and how to identify and correct errors and the preparation of financial statements for incorporated and unincorporated entities.",
    list: isKhmer
      ? [
          "ពន្យល់អំពីបរិបទ និងគោលបំណងនៃគណនេយ្យហិរញ្ញវត្ថុ",
          "កំណត់លក្ខណៈគុណភាពនៃព័ត៌មានហិរញ្ញវត្ថុ",
          "កត់ត្រាប្រតិបត្តិការ និងព្រឹត្តិការណ៍ដោយប្រើប្រព័ន្ធគណនេយ្យទ្វេភាគ",
          "រៀបចំតារាងតុល្យការសាកល្បងដែលបានកែសម្រួលរួច",
          "រៀបចំរបាយការណ៍ហិរញ្ញវត្ថុមូលដ្ឋានសម្រាប់អង្គភាពសាជីវកម្ម និងមិនមែនសាជីវកម្ម",
          "បកស្រាយ និងវិភាគរបាយការណ៍ហិរញ្ញវត្ថុ",
        ]
      : [
          "Explain the context and purpose of financial accounting",
          "Define the qualitative characteristics of financial information",
          "Record transactions and events using the use of double-entry accounting system",
          "Prepare an extended (adjusted) trial balance",
          "Prepare basic financial statements for incorporated and unincorporated entities.",
          "Interpret financial statements",
        ],
    category: isKhmer ? "កម្រិតបច្ចេកទេស" : "Technician Level",
    image: tq1Book,
    syllabusCoverage: [
      {
        code: "A",
        topic: isKhmer
          ? "បរិបទ និងគោលបំណងនៃគណនេយ្យហិរញ្ញវត្ថុ"
          : "The context and purpose of financial accounting",
        weight: 5,
      },
      {
        code: "B",
        topic: isKhmer
          ? "លក្ខណៈគុណភាពនៃព័ត៌មានហិរញ្ញវត្ថុ"
          : "Qualitative characteristics of financial information",
        weight: 5,
      },
      {
        code: "C",
        topic: isKhmer
          ? "ការកត់ត្រាប្រតិបត្តិការ និងព្រឹត្តិការណ៍"
          : "Recording transactions and events",
        weight: 30,
      },
      {
        code: "D",
        topic: isKhmer
          ? "ការរៀបចំតុល្យការសាកល្បងកែសម្រួល"
          : "Preparing an extended trial balance",
        weight: 20,
      },
      {
        code: "E",
        topic: isKhmer
          ? "ការរៀបចំរបាយការណ៍ហិរញ្ញវត្ថុមូលដ្ឋាន"
          : "Preparing basic financial statements",
        weight: 25,
      },
      {
        code: "F",
        topic: isKhmer
          ? "ការបកស្រាយរបាយការណ៍ហិរញ្ញវត្ថុ"
          : "Interpretation of financial statements",
        weight: 15,
      },
    ],
  },
  {
    id: 6,
    name: isKhmer
      ? "TQ6: គណនេយ្យសម្រាប់ការគ្រប់គ្រង"
      : "TQ6: Management Accounting",
    des: isKhmer
      ? "គណនេយ្យគ្រប់គ្រងត្រូវបានរៀបចំឡើងដើម្បីអភិវឌ្ឍចំណេះដឹងអំពីបច្ចេកទេសគណនេយ្យក្នុងការគាំទ្រដល់ថ្នាក់គ្រប់គ្រងក្នុងការរៀបចំផែនការ ការត្រួតពិនិត្យ និងការតាមដានលទ្ធផលការងាររបស់អាជីវកម្មក្នុងបរិបទផ្សេងៗ។ កម្មវិធីសិក្សាណែនាំបេក្ខជនអំពីធាតុផ្សំនៃគណនេយ្យគ្រប់គ្រង ការរៀបចំ និងការប្រើប្រាស់ថវិកា ការគិតថ្លៃដើមស្តង់ដារ ការវិភាគគម្លាត និងការវាស់វែងលទ្ធផលការងាររបស់ស្ថាប័ន។"
      : "Management Accounting is designed to develop knowledge of accounting techniques to support management in planning, controlling and monitoring performance of a business in a variety of contexts. The syllabus introduces candidates to elements of management accounting which are used to make and support decisions and begins with introducing the nature of and sources of information, and purpose of cost accounting and costing techniques; the preparation and use of budgeting and standard costing and variance analysis; and concludes with an introduction to measuring and monitoring the performance of an organisation.",
    list: isKhmer
      ? [
          "រៀបរាប់ និងពន្យល់ពីវិសាលភាពនៃគណនេយ្យគ្រប់គ្រងនៅក្នុងស្ថាប័នពាណិជ្ជកម្ម និងសាធារណៈ",
          "កំណត់និយមន័យ និងពន្យល់ពីគោលបំណងនៃថវិកា និងការគ្រប់គ្រងថវិកា",
          "ជ្រើសរើស និងអនុវត្តបច្ចេកទេសព្យាករណ៍សមស្របដើម្បីជួយក្នុងការរៀបចំថវិកា",
          "ជ្រើសរើសវិធីសាស្ត្រ និងវិធីសាស្រ្តរៀបចំថវិកាសមស្រប និងរៀបចំថវិកា",
          "កំណត់ និងរៀបរាប់ពីថ្លៃដើមដែលទាក់ទងនឹងការផលិតទំនិញ និងការផ្តល់សេវាកម្ម រួចប្រើប្រាស់ដើម្បីកំណត់តម្លៃលក់",
          "គណនា និងពន្យល់ពីគម្លាតរវាងលទ្ធផលជាក់ស្តែង និងស្តង់ដារ ឬថវិកា",
        ]
      : [
          "Describe and explain the scope of management accounting within both commercial and public sector organisations",
          "Define and explain the purpose of budgets and budgetary control",
          "Select and apply appropriate forecasting techniques to assist in budget preparation",
          "Select appropriate budgeting approaches and methods and prepare budgets",
          "Identify and describe the costs associated with the production of products and provision of services and use them to determine prices",
          "Calculate and explain differences between actual performance and standards or budgets",
        ],
    category: isKhmer ? "កម្រិតបច្ចេកទេស" : "Technician Level",
    image: tq2Book,
    syllabusCoverage: [
      {
        code: "A",
        topic: isKhmer
          ? "វិសាលភាពនៃគណនេយ្យគ្រប់គ្រង"
          : "Scope of management accounting",
        weight: 10,
      },
      {
        code: "B",
        topic: isKhmer
          ? "គោលបំណងនៃថវិកា និងការគ្រប់គ្រងថវិកា"
          : "Purpose of budgeting and budgetary control",
        weight: 10,
      },
      {
        code: "C",
        topic: isKhmer
          ? "បច្ចេកទេសនៃការព្យាករណ៍"
          : "Forecasting techniques",
        weight: 15,
      },
      {
        code: "D",
        topic: isKhmer
          ? "វិធីសាស្រ្តរៀបចំថវិកា"
          : "Budgeting approaches",
        weight: 20,
      },
      {
        code: "E",
        topic: isKhmer
          ? "ថ្លៃដើមនៃការផលិត និងការផ្តល់សេវាកម្ម"
          : "Cost of production and provision of services",
        weight: 25,
      },
      {
        code: "F",
        topic: isKhmer
          ? "គម្លាតនៃលទ្ធផលការងារ"
          : "Performance differences",
        weight: 20,
      },
    ],
  },
  {
    id: 7,
    name: isKhmer
      ? "TQ7: ពន្ធដារកម្ពុជា និងការអនុវត្ត"
      : "TQ7: Cambodian taxation and practices",
    des: isKhmer
      ? "ពន្ធដារកម្ពុជាត្រូវបានរៀបចំឡើងជាពិសេសដើម្បីណែនាំសិស្សអំពីប្រព័ន្ធពន្ធដារនៅកម្ពុជា។ វគ្គសិក្សានេះមានគោលបំណងដោះស្រាយលើរបបពន្ធដារផ្សេងៗគ្នា ទម្រង់ពន្ធ និងរដ្ឋបាលសារពើពន្ធ។ វាគ្របដណ្តប់លើការគណនាពន្ធលើប្រាក់បៀវត្ស អត្ថប្រយោជន៍បន្ថែម អតប (VAT) ពន្ធកាត់ទុក ពន្ធប៉ាតង់ ពន្ធគយ និងបញ្ហាក្រមសីលធម៌ក្នុងវិជ្ជាជីវៈពន្ធដារ។"
      : "Cambodia Taxation is specifically designed to introduce students to the Cambodian tax systems. The course aims to deal with the different regimes of taxation and different forms of tax and tax administration. It addresses the objectives and function of taxation; tax calculations relating to salaries, fringe benefits, VAT, Withholding Tax, Patent Tax, and import and export duties. It specifically addresses ethical issues relating to tax.",
    list: isKhmer
      ? [
          "បង្ហាញពីគោលបំណង និងមុខងារនៃពន្ធដារ ព្រមទាំងរៀបរាប់អំពីប្រភេទពន្ធផ្សេងៗ",
          "ពន្យល់អំពីវិសាលភាព និងរដ្ឋបាលសារពើពន្ធ",
          "ពន្យល់ និងគណនាពន្ធលើប្រាក់បៀវត្ស និងអត្ថប្រយោជន៍បន្ថែមផ្សេងទៀត",
          "ពន្យល់ និងគណនាពន្ធលើប្រាក់ចំណេញ",
          "ពន្យល់ និងគណនាពន្ធលើតម្លៃបន្ថែម (អតប / VAT)",
          "ពន្យល់ និងគណនាពន្ធកាត់ទុក",
          "ពន្យល់ និងគណនាពន្ធអប្បបរមា",
          "ពន្យល់ និងគណនាពន្ធប៉ាតង់",
          "ពន្យល់ និងគណនាពន្ធផ្សេងទៀតនៅក្នុងប្រទេសកម្ពុជា",
          "ពន្យល់ និងគណនាពន្ធគយនាំចូល និងនាំចេញ",
          "កំណត់ និងពន្យល់ពីបញ្ហាក្រមសីលធម៌ និងអនុវត្តវិធានការកាត់បន្ថយហានិភ័យក្នុងការអនុវត្តពន្ធ",
        ]
      : [
          "Outline the objectives and functions of taxation and describe the different taxes",
          "Explain the scope and administration of taxes",
          "Explain and calculate the tax due on salaries and other fringe benefits",
          "Explain and calculate the tax due on profit",
          "Explain and calculate Value Added Tax",
          "Explain and calculate withholding tax",
          "Explain and calculate minimum tax",
          "Explain and calculate patent tax",
          "Explain and calculate other taxes in Cambodia",
          "Explain and calculate import and export duties",
          "Identify and explain ethical issues and apply mitigation in tax practice",
        ],
    category: isKhmer ? "កម្រិតបច្ចេកទេស" : "Technician Level",
    image: tq3Book,
    syllabusCoverage: [
      {
        code: "A",
        topic: isKhmer
          ? "គោលបំណង និងមុខងារនៃពន្ធ"
          : "Objectives and functions of tax",
        weight: 5,
      },
      {
        code: "B",
        topic: isKhmer
          ? "រដ្ឋបាលសារពើពន្ធ"
          : "Administration of taxes",
        weight: 5,
      },
      {
        code: "C",
        topic: isKhmer
          ? "ពន្ធលើប្រាក់បៀវត្ស និងអត្ថប្រយោជន៍បន្ថែម"
          : "Tax on salaries and fringe benefits",
        weight: 10,
      },
      {
        code: "D",
        topic: isKhmer
          ? "ពន្ធលើប្រាក់ចំណេញ"
          : "Tax on profits",
        weight: 10,
      },
      {
        code: "E",
        topic: isKhmer
          ? "ពន្ធលើតម្លៃបន្ថែម (អតប / VAT)"
          : "VAT",
        weight: 10,
      },
      {
        code: "F",
        topic: isKhmer
          ? "ពន្ធកាត់ទុក"
          : "Withholding taxes",
        weight: 10,
      },
      {
        code: "G",
        topic: isKhmer
          ? "ពន្ធអប្បបរមា"
          : "Minimum taxes",
        weight: 10,
      },
      {
        code: "H",
        topic: isKhmer
          ? "ពន្ធប៉ាតង់"
          : "Patent taxes",
        weight: 10,
      },
      {
        code: "I",
        topic: isKhmer
          ? "ពន្ធគយនាំចូល និងនាំចេញ"
          : "Import and export duties",
        weight: 10,
      },
      {
        code: "J",
        topic: isKhmer
          ? "ពន្ធផ្សេងៗ"
          : "Other taxes",
        weight: 10,
      },
      {
        code: "K",
        topic: isKhmer
          ? "បញ្ហាក្រមសីលធម៌ និងការកាត់បន្ថយហានិភ័យ"
          : "Ethical issues and mitigation",
        weight: 10,
      },
    ],
  },
  {
    id: 8,
    name: isKhmer
      ? "TQ8: នីតិក្រុមហ៊ុន និងអាជីវកម្មកម្អុជា"
      : "TQ8: Cambodian Business and Company Law",
    category: isKhmer ? "កម្រិតបច្ចេកទេស" : "Technician Level",
    des: isKhmer
      ? "ច្បាប់ពាណិជ្ជកម្ម និងក្រុមហ៊ុននៅកម្ពុជាត្រូវបានបង្កើតឡើងដើម្បីណែនាំសិស្សអំពីក្របខ័ណ្ឌច្បាប់នៃច្បាប់ និងបទប្បញ្ញត្តិអាជីវកម្មនៅកម្ពុជា ដែលទាក់ទងនឹងតួនាទី និងការងាររបស់អ្នកវិជ្ជាជីវៈគណនេយ្យ។ សិស្សក៏នឹងសិក្សាអំពីក្រមសីលធម៌ស្តង់ដារចាំបាច់សម្រាប់គណនេយ្យករវិជ្ជាជីវៈ ច្បាប់ស្តីពីក្រុមហ៊ុន អភិបាលកិច្ចសាជីវកម្ម ការរំលាយ និងការក្ស័យធន ច្បាប់កិច្ចសន្យា ឧបករណ៍ដែលអាចចរចាបាន និងច្បាប់ប្រឆាំងអំពើពុករលួយ។"
      : "Cambodian Business and Company Law is designed to introduce students to the legal framework of business law and regulations in Cambodia relating to the role and work of professional accountants. Students will also study the standard code of ethics necessary for professional accountancy. The syllabus begins with a general overview of the Cambodian legal system, including introducing sources of law and the judicial system in Cambodia, and progresses to consider laws and regulations on companies, corporate governance, dissolution and insolvency; the full lifecycle of a company starting from formation, management, financing and closing (either by dissolution or insolvency); contract law, tort and negotiable instruments; anti-corruption laws and the standard code of ethics required of professional accountants.",
    list: isKhmer
      ? [
          "កំណត់ធាតុផ្សំសំខាន់ៗនៃប្រព័ន្ធច្បាប់ រួមទាំងប្រភពចម្បងនៃច្បាប់",
          "ពន្យល់ពីលក្ខណៈនៃទម្រង់អង្គភាពអាជីវកម្មផ្សេងៗ រៀបរាប់ពីរចនាសម្ព័ន្ធ និងការបង្កើតក្រុមហ៊ុន",
          "រៀបរាប់អំពីទំនាក់ទំនងរវាងភាគីពាក់ព័ន្ធផ្សេងៗ និងតួនាទីរបស់អ្នកវិជ្ជាជីវៈគណនេយ្យ",
          "ពន្យល់អំពីដំណើរការរំលាយ និងការក្ស័យធននៃក្រុមហ៊ុន",
          "កំណត់ និងរៀបរាប់អំពីទម្រង់ផ្សេងៗនៃឧបករណ៍ដែលអាចចរចាបាន និងទិដ្ឋភាពច្បាប់នៃទម្រង់នីមួយៗ",
          "ពន្យល់អំពីលក្ខណៈនៃកិច្ចសន្យា និងដំណោះស្រាយសម្រាប់ការរំលោភកិច្ចសន្យា",
          "ពន្យល់អំពីគោលការណ៍ច្បាប់ និងការអនុវត្តច្បាប់ស្តីពីការទទួលខុសត្រូវរដ្ឋប្បវេណី (Torts)",
          "ពន្យល់អំពីគោលការណ៍ច្បាប់ និងការអនុវត្តច្បាប់ប្រឆាំងអំពើពុករលួយពាក់ព័ន្ធនឹងវិជ្ជាជីវៈគណនេយ្យ និងក្រមសីលធម៌ស្តង់ដារដែលតម្រូវសម្រាប់អ្នកវិជ្ជាជីវៈគណនេយ្យ",
        ]
      : [
          "Identify the essential elements of the legal system, including the main sources of law",
          "Explain the nature of the different forms of business entities, describing their structure and formation of a company",
          "Describe the relationship between different stakeholders and the role of professional accountants",
          "Explain the dissolution and insolvency process of companies",
          "Identify and describe the different forms of negotiable instruments and legal aspects of each form",
          "Explain the nature of contracts and remedies for breach of contract",
          "Explain the legal principles and application of laws relating to torts",
          "Explain the legal principles and application of anti-corruption laws relating to professional accountancy and the standard code of ethics required of professional accountants",
        ],
    syllabusCoverage: [
      {
        code: "A",
        topic: isKhmer
          ? "ធាតុផ្សំសំខាន់ៗនៃប្រព័ន្ធច្បាប់"
          : "Essential elements of the legal system",
        weight: 10,
      },
      {
        code: "B",
        topic: isKhmer ? "អង្គភាពអាជីវកម្ម" : "Business entities",
        weight: 10,
      },
      {
        code: "C",
        topic: isKhmer ? "ទំនាក់ទំនងភាគីពាក់ព័ន្ធ" : "Stakeholder relationships",
        weight: 10,
      },
      {
        code: "D",
        topic: isKhmer ? "ការរំលាយ និងការក្ស័យធន" : "Dissolution and insolvency",
        weight: 10,
      },
      {
        code: "E",
        topic: isKhmer ? "ឧបករណ៍ដែលអាចចរចាបាន" : "Negotiable instruments",
        weight: 10,
      },
      {
        code: "F",
        topic: isKhmer ? "កិច្ចសន្យា" : "Contracts",
        weight: 20,
      },
      {
        code: "G",
        topic: isKhmer ? "អំពើអនីត្យានុកូល (Tort)" : "Tort",
        weight: 20,
      },
      {
        code: "H",
        topic: isKhmer ? "ការប្រឆាំងអំពើពុករលួយ" : "Anti-corruption",
        weight: 10,
      },
    ],
  },
];
