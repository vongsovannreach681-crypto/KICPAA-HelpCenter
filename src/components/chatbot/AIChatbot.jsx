import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FaEnvelope,
  FaHeadset,
  FaMinus,
  FaPaperPlane,
  FaRotateRight,
  FaTelegram,
  FaXmark,
} from "react-icons/fa6";
import botAvatar from "../../assets/images/bot.png";

// Bilingual Knowledge Base for KICPAA ATQ Program
const faqKnowledgeBase = [
  // --- FAQ on Exam Session ---
  {
    id: "session-when",
    category: "Exam Session",
    question: "When can I take exams?",
    questionKm: "តើខ្ញុំអាចប្រឡងនៅពេលណា?",
    keywords: [
      "when",
      "exam session",
      "schedule",
      "timing",
      "month",
      "monthly",
      "four days",
      "take exams",
      "exam session dates",
      "តើខ្ញុំអាចប្រឡងនៅពេលណា?",
      "ពេលណា",
      "កាលវិភាគ",
      "សម័យប្រឡង",
      "តើប្រឡងនៅពេលណា",
      "តើខ្ញុំអាចប្រឡងនៅពេលណា",
    ],
    answerEn:
      "Students can take the exams during **KICPAA’s monthly exam sessions**, which run for four days each month.",
    answerKm:
      "សិស្សអាចចូលរួមការប្រឡងតាមសម័យប្រឡងប្រចាំខែរបស់យើង ដែលប្រព្រឹត្តទៅក្នុងរយៈពេល **៤ ថ្ងៃជារៀងរាល់ខែ**។",
    suggestionsEn: [
      "What subjects will be available at each month?",
      "How can I enter for exams?",
      "When is the registration deadline?",
    ],
    suggestionsKm: [
      "តើមានមុខវិជ្ជាអ្វីខ្លះដែលអាចប្រឡងបានក្នុងខែនីមួយៗ?",
      "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
      "តើកាលបរិច្ឆេទផុតកំណត់នៃការចុះឈ្មោះប្រឡងនៅពេលណា?",
    ],
  },
  {
    id: "session-available",
    category: "Exam Session",
    question: "What subjects will be available at each month?",
    questionKm: "តើមានមុខវិជ្ជាអ្វីខ្លះដែលអាចប្រឡងបានក្នុងខែនីមួយៗ?",
    keywords: [
      "available",
      "which exams",
      "what exams",
      "what exams will be available",
      "what subjects will be available",
      "all 8",
      "subjects available",
      "offer",
      "calendar",
      "មុខវិជ្ជា",
      "៨ មុខ",
      "តើមានមុខវិជ្ជាអ្វីខ្លះ",
      "តើមានមុខវិជ្ជាអ្វីខ្លះដែលអាចប្រឡងបានក្នុងខែនីមួយៗ",
    ],
    answerEn:
      "Every year, KICPAA offers all eight subjects for examination each month, from January to December. Please refer to the **ATQ Program Subjects, Exam Schedule, and Important Exam Dates** for more information.",
    answerKm:
      "ជារៀងរាល់ឆ្នាំ **វ.គ.ស.ក. ផ្តល់ជូននូវមុខវិជ្ជាទាំង ៨** សម្រាប់ការប្រឡងជារៀងរាល់ខែ ចាប់ពីខែមករា ដល់ ខែធ្នូ។ សូមពិនិត្យមើលមុខវិជ្ជាកម្មវិធី ATQ និងកាលបរិច្ឆេទសំខាន់ៗសម្រាប់ការប្រឡង។",
    suggestionsEn: [
      "Can I take the ATQ Qualification exams in any order?",
      "How many exams can I take at each exam session?",
      "When is the registration deadline?",
    ],
    suggestionsKm: [
      "តើខ្ញុំអាចប្រឡងមុខវិជ្ជា ATQ តាមលំដាប់ណាមួយក៏បានមែនទេ?",
      "តើខ្ញុំអាចប្រឡងបានប៉ុន្មានមុខវិជ្ជាក្នុងសម័យប្រឡងនីមួយៗ?",
      "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
    ],
  },

  // --- FAQ on Exam Registration and Booking ---
  {
    id: "booking-order",
    category: "Registration & Booking",
    question: "Can I take the ATQ Qualification exams in any order?",
    questionKm: "តើខ្ញុំអាចប្រឡងមុខវិជ្ជា ATQ តាមលំដាប់ណាមួយក៏បានមែនទេ?",
    keywords: [
      "order",
      "sequence",
      "principles first",
      "technical first",
      "any order",
      "level",
      "prerequisite",
      "can i take exams in any order",
      "can i take the atq qualification exams in any order",
      "តើអាចប្រឡងតាមលំដាប់ណា",
      "តើខ្ញុំអាចប្រឡងតាមលំដាប់ណា",
      "លំដាប់",
      "កម្រិត",
      "principles",
    ],
    answerEn:
      "Yes! You may take exams in any order within the same level. However, candidates must pass the Principles Level (TQ1–TQ4) before attempting the Technician Level (TQ5–TQ8).",
    answerKm:
      "បាទ/ចាស! លោកអ្នកអាចប្រឡងតាមលំដាប់ណាមួយក៏បាននៅក្នុងកម្រិតដូចគ្នា។ ប៉ុន្តែលោកអ្នកត្រូវតែប្រឡងជាប់កម្រិតមូលដ្ឋាន (Principles Level: TQ1–TQ4) ជាមុនសិន មុននឹងអាចប្រឡងកម្រិតបច្ចេកទេស (Technician Level: TQ5–TQ8)។",
    suggestionsEn: [
      "How many exams can I take at each exam session?",
      "How can I enter for exams?",
      "If I fail an exam, can I amend my entry to resit the exam in the same session?",
    ],
    suggestionsKm: ["តើខ្ញុំអាចប្រឡងបានប៉ុន្មានមុខវិជ្ជាក្នុងសម័យប្រឡងនីមួយៗ?", "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?", "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?"],
  },
  {
    id: "booking-deadlines",
    category: "Registration & Booking",
    question: "When is the registration deadline?",
    questionKm: "តើកាលបរិច្ឆេទផុតកំណត់នៃការចុះឈ្មោះប្រឡងនៅពេលណា?",
    keywords: [
      "deadline",
      "booking deadline",
      "registration deadline",
      "when are booking deadlines",
      "what are booking deadlines",
      "when is the registration deadline",
      "when to book",
      "last date",
      "key dates",
      "ផុតកំណត់",
      "ថ្ងៃចុងក្រោយ",
      "តើកាលបរិច្ឆេទផុតកំណត់នៃការចុះឈ្មោះប្រឡងនៅពេលណា?",
      "តើកាលបរិច្ឆេទផុតកំណត់នៃការចុះឈ្មោះប្រឡងនៅពេលណា",
    ],
    answerEn:
      "The standard exam registration deadline is the **15th of each month** (15 to 30 days before the exam session) through the Learning Hub. Late bookings may be requested via email to `education@kicpaa.org`.",
    answerKm:
      "កាលបរិច្ឆេទផុតកំណត់ចុះឈ្មោះប្រឡងស្តង់ដារគឺនៅរៀងរាល់ **ថ្ងៃទី១៥ នៃខែនីមួយៗ** (១៥ ទៅ ៣០ ថ្ងៃមុនសម័យប្រឡង) តាមរយៈ Learning Hub។",
    suggestionsEn: [
      "Can I still sit my exams if I miss the standard exam booking deadline?",
      "How do I know if my exam booking has been successful?",
      "How can I enter for exams?",
    ],
    suggestionsKm: [
      "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់?",
      "តើខ្ញុំដឹងដោយរបៀបណាថាការកក់ប្រឡងបានជោគជ័យ?",
      "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
    ],
  },
  {
    id: "booking-max-exams",
    category: "Registration & Booking",
    question: "How many exams can I take at each exam session?",
    questionKm: "តើខ្ញុំអាចប្រឡងបានប៉ុន្មានមុខវិជ្ជាក្នុងសម័យប្រឡងនីមួយៗ?",
    keywords: [
      "how many",
      "limit",
      "maximum",
      "max exams",
      "how many exams can i take per session",
      "how many exams can i take at each exam session",
      "how many exams can i take",
      "per session",
      "per year",
      "calendar year",
      "ប៉ុន្មានមុខ",
      "អតិបរមា",
      "ចំនួនមុខវិជ្ជាប្រឡង",
      "តើប្រឡងបានប៉ុន្មានមុខ",
      "តើប្រឡងបានប៉ុន្មានមុខក្នុង១សម័យ",
      "តើខ្ញុំអាចប្រឡងបានប៉ុន្មានមុខវិជ្ជាក្នុងសម័យប្រឡងនីមួយៗ",
    ],
    answerEn:
      "You can register for a maximum of four (4) exams per monthly exam session, and up to eight (8) subjects per calendar year.",
    answerKm:
      "អ្នកអាចចុះឈ្មោះប្រឡងបានអតិបរមា ៤ មុខវិជ្ជាក្នុងមួយសម័យប្រឡងប្រចាំខែ និងរហូតដល់ ៨ មុខវិជ្ជាក្នុងមួយឆ្នាំប្រតិទិន។",
    suggestionsEn: [
      "Can I take the ATQ Qualification exams in any order?",
      "Where can I take my exams?",
      "If I fail an exam, can I amend my entry to resit the exam in the same session?",
    ],
    suggestionsKm: [
      "តើខ្ញុំអាចប្រឡងមុខវិជ្ជា ATQ តាមលំដាប់ណាមួយក៏បានមែនទេ?",
      "តើខ្ញុំអាចប្រឡងនៅទីណា?",
      "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?",
    ],
  },
  {
    id: "booking-fail-resit",
    category: "Registration & Booking",
    question:
      "If I fail an exam, can I amend my entry to resit the exam in the same session?",
    questionKm:
      "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?",
    keywords: [
      "fail",
      "failed",
      "resit",
      "retake",
      "same session",
      "amend entry",
      "what if i fail an exam",
      "if i fail can i resit",
      "ធ្លាក់",
      "ប្រឡងសង",
      "កែប្រែ",
      "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?",
      "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?",
      "បើធ្លាក់តើអាចប្រឡងសងពេលណា",
    ],
    answerEn:
      "No. If you fail an exam, you must resit it in the next exam session.",
    answerKm:
      "**មិនបានទេ។** ប្រសិនបើអ្នកធ្លាក់ក្នុងសម័យប្រឡងនេះ អ្នកត្រូវតែប្រឡងសងនៅសម័យប្រឡងបន្ទាប់ប៉ុណ្ណោះ។",
    suggestionsEn: [
      "When are results issued?",
      "What can I do if I think that my results are incorrect?",
      "How many exams can I take at each exam session?",
    ],
    suggestionsKm: [
      "តើលទ្ធផលប្រឡងចេញនៅពេលណា?",
      "តើខ្ញុំអាចធ្វើអ្វីបាន ប្រសិនបើគិតថាលទ្ធផលមិនត្រឹមត្រូវ?",
      "ចំនួនមុខវិជ្ជាប្រឡង",
    ],
  },
  {
    id: "booking-location",
    category: "Registration & Booking",
    question: "Where can I take my exams?",
    questionKm: "តើខ្ញុំអាចប្រឡងនៅទីណា?",
    keywords: [
      "where",
      "location",
      "center",
      "centre",
      "examination center",
      "where can i take my exams",
      "where can i take exams",
      "venue",
      "place",
      "address",
      "កន្លែងប្រឡង",
      "ទីតាំង",
      "មណ្ឌល",
      "តើខ្ញុំអាចប្រឡងនៅទីណា?",
      "ទីតាំងប្រឡងនៅឯណា",
      "តើខ្ញុំអាចប្រឡងនៅទីណា",
    ],
    answerEn:
      "Your examination center can be found in your **Examination Identification Document** available to print after your registration. Exams are conducted at the KICPAA Office Exam Center in Phnom Penh.",
    answerKm:
      "មណ្ឌលប្រឡងរបស់អ្នកមានបញ្ជាក់ក្នុង **Examination Identification Document** ដែលអ្នកអាចបោះពុម្ពបានបន្ទាប់ពីចុះឈ្មោះរួច។ ការប្រឡងប្រព្រឹត្តទៅនៅមណ្ឌលប្រឡងការិយាល័យ វ.គ.ស.ក. រាជធានីភ្នំពេញ។",
    suggestionsEn: [
      "What happens on the exam day?",
      "What documents do I need to bring on exam day?",
      "How can I contact KICPAA ATQ support?",
    ],
    suggestionsKm: [
      "តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង?",
      "តើខ្ញុំត្រូវយកឯកសារអ្វីខ្លះទៅថ្ងៃប្រឡង?",
      "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?",
    ],
  },
  {
    id: "booking-how-to-enter",
    category: "Registration & Booking",
    question: "How can I enter for exams?",
    questionKm: "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
    keywords: [
      "how can i enter",
      "how to register",
      "how to book",
      "how can i enter for exams",
      "how to enter for exams",
      "how to register for exams",
      "register",
      "steps",
      "learning hub",
      "exam fee",
      "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
      "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
      "តើត្រូវចុះឈ្មោះប្រឡងយ៉ាងដូចម្តេច",
      "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា",
      "របៀបកក់",
    ],
    answerEn:
      "To enter for exams:\n1. You must be a **student member of KICPAA** and have paid your exam fee.\n2. Register 15-30 days in advance through the Learning Hub.\n3. Go to **Examination** > **SELECT YOUR NEXT EXAMINATION DATE** > **SELECT SUBJECT**.\n4. Select your desired date from the list.",
    answerKm:
      "ដើម្បីចុះឈ្មោះប្រឡង៖\n១. អ្នកត្រូវតែជា **សមាជិកសិស្សរបស់ វ.គ.ស.ក** និងបានបង់ថ្លៃប្រឡងរួចរាល់។\n២. អ្នកអាចចុះឈ្មោះមុន ១៥-៣០ ថ្ងៃ តាមរយៈ Learning Hub។\n៣. ចូលទៅ **Examination** > **SELECT YOUR NEXT EXAMINATION DATE** > **SELECT SUBJECT**។\n៤. ជ្រើសរើសកាលបរិច្ឆេទដែលអ្នកចង់ប្រឡង។",
    suggestionsEn: [
      "When can I take exams?",
      "When is the registration deadline?",
      "Can I still sit my exams if I miss the standard exam booking deadline?",
    ],
    suggestionsKm: [
      "តើខ្ញុំអាចប្រឡងនៅពេលណា?",
      "តើកាលបរិច្ឆេទផុតកំណត់នៃការចុះឈ្មោះប្រឡងនៅពេលណា?",
      "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់?",
    ],
  },
  {
    id: "booking-late",
    category: "Registration & Booking",
    question:
      "Can I still sit my exams if I miss the standard exam booking deadline?",
    questionKm: "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់?",
    keywords: [
      "miss",
      "late",
      "late booking",
      "after deadline",
      "can i still sit if i miss deadline",
      "can i still sit my exams if i miss the standard exam booking deadline",
      "can i do late booking",
      "what if i miss the exam",
      "request late",
      "យឺត",
      "ខកខាន",
      "ហួសពេល",
      "បើហួសកាលកំណត់តើអាចប្រឡងបានទេ",
      "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់?",
      "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់?",
    ],
    answerEn:
      'If you are a student member and already paid your exam fee, you may request **Late Exam Booking**:\n- **Email**: `education@kicpaa.org`\n- **Subject**: *"Request for Late Exam Booking"*\n- **Provide**: Full name, Student ID, Subject, Phone number, and specific reason.\n*(Note: Other means of communication besides email are deemed invalid.)*',
    answerKm:
      'ប្រសិនបើអ្នកជាសមាជិកសិស្ស និងបានបង់ថ្លៃប្រឡងរួចហើយ អ្នកអាចស្នើសុំ **Late Exam Booking**៖\n- **អ៊ីមែល**: `education@kicpaa.org`\n- **ចំណងជើង**: *"Request for Late Exam Booking"*\n- **ផ្ញើព័ត៌មាន**: ឈ្មោះពេញ, Student ID, មុខវិជ្ជា, លេខទូរស័ព្ទ និងមូលហេតុជាក់លាក់។\n*(ចំណាំ៖ ការទំនាក់ទំនងក្រៅពីអ៊ីមែល គឺមិនមានសុពលភាពឡើយ)*',
    suggestionsEn: [
      "I would like to change my exam date, is this possible?",
      "How do I know if my exam booking has been successful?",
      "How can I contact KICPAA ATQ support?",
    ],
    suggestionsKm: [
      "តើខ្ញុំអាចផ្លាស់ប្តូរថ្ងៃប្រឡងបានទេ?",
      "ដឹងថាកក់ជោគជ័យដោយរបៀបណា?",
      "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?",
    ],
  },
  {
    id: "booking-success",
    category: "Registration & Booking",
    question: "How do I know if my exam booking has been successful?",
    questionKm: "តើខ្ញុំដឹងដោយរបៀបណាថាការកក់ប្រឡងបានជោគជ័យ?",
    keywords: [
      "successful",
      "confirm",
      "confirmation",
      "status",
      "verify",
      "how do i know booking is successful",
      "how do i know booking succeeded",
      "how do i know if my exam booking has been successful",
      "ជោគជ័យ",
      "បញ្ជាក់",
      "ពិនិត្យ",
      "ដឹងថាកក់បានជោគជ័យដោយរបៀបណា",
      "ដឹងថាកក់ជោគជ័យដោយរបៀបណា",
      "តើខ្ញុំដឹងដោយរបៀបណាថាការកក់ប្រឡងបានជោគជ័យ",
    ],
    answerEn:
      "After registering for an exam, make sure to save your exam booking. Once saved, your booking will appear under the Examination tab. The KICPAA team will send your Exam Identification Document and exam details via Telegram 1–2 days before the exam date.",
    answerKm:
      "បន្ទាប់ពីចុះឈ្មោះប្រឡង សូមប្រាកដថាអ្នកបានចុចរក្សាទុកនូវកាលវិភាគប្រឡង។ នៅពេលរក្សាទុករួចរាល់ អ្នកនឹងឃើញការកក់នៅលើ Examination Tab ហើយក្រុមការងារនឹងផ្ញើ Exam Identification Document ទៅកាន់តេលេក្រាមរបស់លោកអ្នក ១ ទៅ ២ ថ្ងៃ មុនថ្ងៃប្រឡង។",
    suggestionsEn: [
      "Where can I take my exams?",
      "I would like to change my exam date, is this possible?",
      "What happens on the exam day?",
    ],
    suggestionsKm: ["តើខ្ញុំអាចប្រឡងនៅទីណា?", "តើខ្ញុំអាចផ្លាស់ប្តូរថ្ងៃប្រឡងបានទេ?", "តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង?"],
  },
  {
    id: "booking-change",
    category: "Registration & Booking",
    question: "I would like to change my exam date, is this possible?",
    questionKm: "តើខ្ញុំអាចផ្លាស់ប្តូរថ្ងៃប្រឡងបានទេ?",
    keywords: [
      "change",
      "cancel",
      "reschedule",
      "modify booking",
      "postpone",
      "can i change my booking",
      "i would like to change my booking",
      "i would like to change my exam date is this possible",
      "ផ្លាស់ប្តូរ",
      "ប្តូរថ្ងៃ",
      "លុបចោល",
      "តើអាចផ្លាស់ប្តូរការកក់បានទេ",
      "តើខ្ញុំអាចផ្លាស់ប្តូរថ្ងៃប្រឡងបានទេ?",
      "តើខ្ញុំអាចផ្លាស់ប្តូរថ្ងៃប្រឡងបានទេ",
    ],
    answerEn:
      "Yes, you can make changes up to the **Late Exam Booking Deadline** by emailing `education@kicpaa.org` with:\n- Full name, Student ID, Subject, Phone number, specific reason, and relevant subjects.\n- Allowed requests: **Exam cancelation** or **Change exam schedule**.\n*(Any request after the Late Exam Booking Deadline is invalid.)*\n- **Note**: Requests to change the exam schedule must be submitted at least one week before the exam date.",
    answerKm:
      "បាទ/ចាស អ្នកអាចស្នើសុំកែប្រែរហូតដល់ **Late Exam Booking Deadline** ដោយផ្ញើអ៊ីមែលទៅ `education@kicpaa.org` ដោយបញ្ជាក់៖\n- ឈ្មោះពេញ, Student ID, មុខវិជ្ជា, លេខទូរស័ព្ទ, មូលហេតុ និងមុខវិជ្ជាពាក់ព័ន្ធ។\n- ការស្នើសុំដែលអនុញ្ញាត៖ **លុបចោលការប្រឡង (Cancelation)** ឬ **ប្តូរកាលវិភាគ (Reschedule)**។\n- **ចំណាំ**៖ ការស្នើសុំកែប្រែនេះ ត្រូវធ្វើឡើងមុនថ្ងៃប្រឡងមួយសប្តាហ៍។",
    suggestionsEn: [
      "Can I change my entry on the day of the exam?",
      "When is the registration deadline?",
      "How can I contact KICPAA ATQ support?",
    ],
    suggestionsKm: [
      "តើខ្ញុំអាចផ្លាស់ប្តូរការចុះឈ្មោះនៅថ្ងៃប្រឡងបានទេ?",
      "តើកាលបរិច្ឆេទផុតកំណត់នៃការចុះឈ្មោះប្រឡងនៅពេលណា?",
      "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?",
    ],
  },

  // --- FAQ about Exam Sitting ---
  {
    id: "sitting-exam-day",
    category: "Exam Sitting",
    question: "What happens on the exam day?",
    questionKm: "តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង?",
    keywords: [
      "exam day",
      "what happens",
      "procedure",
      "id",
      "passport",
      "documents",
      "required documents",
      "what documents",
      "what documents are required",
      "what happens on exam day",
      "what happens on the exam day",
      "តើខ្ញុំត្រូវយកឯកសារអ្វីខ្លះទៅថ្ងៃប្រឡង?",
      "នៅថ្ងៃប្រឡង",
      "arrive",
      "check in",
      "តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង?",
      "នីតិវិធី",
      "អត្តសញ្ញាណប័ណ្ណ",
      "តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង",
    ],
    answerEn:
      "On exam day:\n1. Your **Examination Identification Document** has your timetable, seating arrangement, and center address.\n2. Bring your **Exam Identification Document** and **Original National ID/Passport**. These will be checked and verified upon entry.\n3. Make sure to arrive early (at least 30 minutes before) and review the regulations detailed on the document.\n\nNeed help on location? Contact **017 493 140** (Telegram available).",
    answerKm:
      "នៅថ្ងៃប្រឡង៖\n១. ឯកសារសម្គាល់ខ្លួនសម្រាប់ប្រឡងរបស់លោកអ្នក មានបញ្ចូលនូវកាលវិភាគប្រឡង លេខតុ/លេខកៅអី និងអាសយដ្ឋានមណ្ឌលប្រឡង។\n២. សូមយកឯកសារសម្គាល់ខ្លួនសម្រាប់ប្រឡង និងអត្តសញ្ញាណប័ណ្ណច្បាប់ដើម ឬលិខិតឆ្លងដែនច្បាប់ដើមមកជាមួយ ដើម្បីពិនិត្យផ្ទៀងផ្ទាត់។\n៣. សូមប្រាកដថាអ្នកបានមកដល់មុនពេល ៣០ នាទី និងពិនិត្យមើលការណែនាំផ្សេងៗដែលមានចែងយ៉ាងលម្អិតនៅលើឯកសារ។\n\nលម្អិតអំពីទីតាំង សូមទាក់ទងលេខ 017 493 140 (មាន Telegram)។",
    suggestionsEn: [
      "Where can I find the rules and regulations in relation to sitting an examination?",
      "Can I change my entry on the day of the exam?",
      "If something happens at the exam center that affects my performance, can I make a complaint?",
    ],
    suggestionsKm: [
      "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា?",
      "តើខ្ញុំអាចផ្លាស់ប្តូរការចុះឈ្មោះនៅថ្ងៃប្រឡងបានទេ?",
      "ប្រសិនបើមានអ្វីកើតឡើងនៅមណ្ឌលប្រឡងប៉ះពាល់ដល់ការប្រឡង តើខ្ញុំអាចតវ៉ាបានទេ?",
    ],
  },
  {
    id: "sitting-rules",
    category: "Exam Sitting",
    question:
      "Where can I find the rules and regulations in relation to sitting an examination?",
    questionKm: "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា?",
    keywords: [
      "rules",
      "regulations",
      "guidelines",
      "equipment",
      "allowed",
      "prohibited",
      "where can i find exam rules",
      "where can i find the rules and regulations in relation to sitting an examination",
      "exam sitting rules",
      "ច្បាប់",
      "បទបញ្ជា",
      "វិន័យ",
      "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា?",
      "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា?",
      "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា",
    ],
    answerEn:
      "Full details of the rules and regulations are available on the **reverse side of your Examination Identification Document**. Please familiarise yourself with these prior to attending the examination center.",
    answerKm:
      "ព័ត៌មានលម្អិតអំពីច្បាប់ និងបទប្បញ្ញត្តិ មានបញ្ជាក់នៅលើ **ផ្នែកខាងក្រោយនៃ Examination Identification Document** របស់អ្នក។ សូមអានស្វែងយល់មុនពេលចូលរួមការប្រឡង។",
    suggestionsEn: [
      "What happens on the exam day?",
      "Can I change my entry on the day of the exam?",
      "If something happens at the exam center that affects my performance, can I make a complaint?",
    ],
    suggestionsKm: ["តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង?", "តើខ្ញុំអាចផ្លាស់ប្តូរការចុះឈ្មោះនៅថ្ងៃប្រឡងបានទេ?", "ប្រសិនបើមានអ្វីកើតឡើងនៅមណ្ឌលប្រឡងប៉ះពាល់ដល់ការប្រឡង តើខ្ញុំអាចតវ៉ាបានទេ?"],
  },
  {
    id: "sitting-same-day-change",
    category: "Exam Sitting",
    question: "Can I change my entry on the day of the exam?",
    questionKm: "តើខ្ញុំអាចផ្លាស់ប្តូរការចុះឈ្មោះនៅថ្ងៃប្រឡងបានទេ?",
    keywords: [
      "change on the day",
      "day of exam",
      "switch subject",
      "last minute change",
      "can i change entry on exam day",
      "can i change my entry on the day of the exam",
      "ប្តូរនៅថ្ងៃប្រឡង",
      "ប្តូរមុខវិជ្ជា",
      "តើអាចប្តូរនៅថ្ងៃប្រឡងបានទេ",
      "តើខ្ញុំអាចផ្លាស់ប្តូរការចុះឈ្មោះនៅថ្ងៃប្រឡងបានទេ",
    ],
    answerEn:
      "**No.** Students are **not allowed** to change their exam entry on the day of the exam.",
    answerKm:
      "**មិនបានឡើយ។** សិស្សមិនត្រូវបានអនុញ្ញាតឱ្យផ្លាស់ប្តូរការចុះឈ្មោះរបស់ពួកគេនៅថ្ងៃប្រឡងនោះទេ។",
    suggestionsEn: [
      "I would like to change my exam date, is this possible?",
      "Can I still sit my exams if I miss the standard exam booking deadline?",
      "Where can I find the rules and regulations in relation to sitting an examination?",
    ],
    suggestionsKm: [
      "តើខ្ញុំអាចផ្លាស់ប្តូរថ្ងៃប្រឡងបានទេ?",
      "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់?",
      "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា?",
    ],
  },
  {
    id: "sitting-complaint",
    category: "Exam Sitting",
    question:
      "If something happens at the exam center that affects my performance, can I make a complaint?",
    questionKm:
      "ប្រសិនបើមានអ្វីកើតឡើងនៅមណ្ឌលប្រឡងប៉ះពាល់ដល់ការប្រឡង តើខ្ញុំអាចតវ៉ាបានទេ?",
    keywords: [
      "complaint",
      "issue",
      "condition",
      "affect performance",
      "problem",
      "dissatisfied",
      "exam complaints",
      "can i file a complaint",
      "if something happens at the exam center that affects my performance can i make a complaint",
      "តវ៉ា",
      "ប្តឹង",
      "បញ្ហា",
      "ប្រសិនបើមានអ្វីកើតឡើងនៅមណ្ឌលប្រឡងប៉ះពាល់ដល់ការប្រឡង តើខ្ញុំអាចតវ៉ាបានទេ?",
      "ប្រសិនបើមានអ្វីកើតឡើងនៅមណ្ឌលប្រឡងប៉ះពាល់ដល់ការប្រឡង តើខ្ញុំអាចតវ៉ាបានទេ",
    ],
    answerEn:
      "KICPAA makes every effort to ensure fair conditions. If you feel conditions affected your performance, inform KICPAA directly by email to `education@kicpaa.org`.",
    answerKm:
      "វ.គ.ស.ក. តែងតែខិតខំប្រឹងប្រែងឱ្យអស់ពីសមត្ថភាពដើម្បីធានាលក្ខខណ្ឌប្រឡងល្អបំផុត។ ប្រសិនបើអ្នកមានអារម្មណ៍ថាលក្ខខណ្ឌប៉ះពាល់ដល់ការប្រឡង សូមជូនដំណឹងផ្ទាល់ទៅកាន់ `education@kicpaa.org`។",
    suggestionsEn: [
      "When are results issued?",
      "What can I do if I think that my results are incorrect?",
      "How can I contact KICPAA ATQ support?",
    ],
    suggestionsKm: [
      "តើលទ្ធផលប្រឡងចេញនៅពេលណា?",
      "តើខ្ញុំអាចធ្វើអ្វីបាន ប្រសិនបើគិតថាលទ្ធផលមិនត្រឹមត្រូវ?",
      "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?",
    ],
  },

  // --- FAQ about Exam Result ---
  {
    id: "result-when",
    category: "Exam Result",
    question: "When are results issued?",
    questionKm: "តើលទ្ធផលប្រឡងចេញនៅពេលណា?",
    keywords: [
      "results",
      "issued",
      "scores",
      "mark",
      "when result",
      "submission",
      "when are results issued",
      "លទ្ធផល",
      "ពិន្ទុ",
      "ចេញពេលណា",
      "លទ្ធផលចេញពេលណា",
      "តើលទ្ធផលប្រឡងចេញនៅពេលណា",
    ],
    answerEn:
      "The exam result will be available **immediately after your submission**.",
    answerKm:
      "លទ្ធផលប្រឡងនឹងមាន **ភ្លាមៗបន្ទាប់ពីអ្នកចុចបញ្ជូន (Submission)** រួចរាល់។",
    suggestionsEn: [
      "What can I do if I think that my results are incorrect?",
      "If I fail an exam, can I amend my entry to resit the exam in the same session?",
      "When can I take exams?",
    ],
    suggestionsKm: [
      "តើខ្ញុំអាចធ្វើអ្វីបាន ប្រសិនបើគិតថាលទ្ធផលមិនត្រឹមត្រូវ?",
      "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?",
      "តើខ្ញុំអាចប្រឡងនៅពេលណា?",
    ],
  },
  {
    id: "result-incorrect",
    category: "Exam Result",
    question: "What can I do if I think that my results are incorrect?",
    questionKm: "តើខ្ញុំអាចធ្វើអ្វីបាន ប្រសិនបើគិតថាលទ្ធផលមិនត្រឹមត្រូវ?",
    keywords: [
      "incorrect",
      "review",
      "recheck",
      "appeal",
      "wrong score",
      "re-mark",
      "what if results are incorrect",
      "what can i do if i think that my results are incorrect",
      "តើខ្ញុំអាចធ្វើអ្វីបាន ប្រសិនបើគិតថាលទ្ធផលមិនត្រឹមត្រូវ?",
      "លទ្ធផលមិនត្រឹមត្រូវ",
      "ពិនិត្យឡើងវិញ",
      "មិនត្រឹមត្រូវ",
      "ពិន្ទុខុស",
      "តើខ្ញុំអាចធ្វើអ្វីបាន ប្រសិនបើគិតថាលទ្ធផលមិនត្រឹមត្រូវ",
    ],
    answerEn:
      "You can request an **exam result review** by emailing `education@kicpaa.org` with your full name, student ID, subject, and reason.",
    answerKm:
      "អ្នកអាចស្នើសុំការ **ពិនិត្យលទ្ធផលប្រឡងឡើងវិញ (Exam Result Review)** ដោយផ្ញើអ៊ីមែលទៅកាន់ `education@kicpaa.org` ដោយភ្ជាប់មកជាមួយឈ្មោះពេញ, Student ID, មុខវិជ្ជា និងមូលហេតុ។",
    suggestionsEn: [
      "When are results issued?",
      "If I fail an exam, can I amend my entry to resit the exam in the same session?",
      "How can I contact KICPAA ATQ support?",
    ],
    suggestionsKm: ["តើលទ្ធផលប្រឡងចេញនៅពេលណា?", "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?", "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?"],
  },
  {
    id: "contact-support",
    category: "Contact",
    question: "How can I contact KICPAA ATQ support?",
    questionKm: "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?",
    keywords: [
      "contact",
      "support",
      "email",
      "phone",
      "telegram",
      "call",
      "helpdesk",
      "office",
      "contact information",
      "contact kicpaa support",
      "contact kicpaa",
      "how can i contact kicpaa atq support",
      "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?",
      "លេខទូរស័ព្ទ",
      "អ៊ីមែល",
      "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ kicpaa atq តាមរបៀបណា",
    ],
    answerEn:
      "**KICPAA ATQ Support Contacts**:\n- ✉️ **Email**: `Education@kicpaa.org` / `ATQ@kicpaa.org`\n- 📞 **Phone / Telegram**: `+855 17 493 140`\n- 🌐 **Platform**: KICPAA Learning Hub",
    answerKm:
      "**ព័ត៌មានទំនាក់ទំនង KICPAA ATQ**៖\n- ✉️ **អ៊ីមែល**: `Education@kicpaa.org` / `ATQ@kicpaa.org`\n- 📞 **ទូរស័ព្ទ / Telegram**: `+855 17 493 140`\n- 🌐 **ប្រព័ន្ធ**: KICPAA Learning Hub",
    suggestionsEn: [
      "When can I take exams?",
      "How can I enter for exams?",
      "When is the registration deadline?",
    ],
    suggestionsKm: [
      "តើខ្ញុំអាចប្រឡងនៅពេលណា?",
      "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
      "តើកាលបរិច្ឆេទផុតកំណត់នៃការចុះឈ្មោះប្រឡងនៅពេលណា?",
    ],
  },
];

// Direct mapping of clickable suggestion pills and quick-prompts to their target FAQ items
const suggestionTargetMap = {
  // English suggestions -> target FAQ ID
  "What subjects will be available at each month?": "session-available",
  "what subjects will be available": "session-available",
  "what subjects will be available at each month": "session-available",
  "how can i enter for exams": "booking-how-to-enter",
  "how to register for exams": "booking-how-to-enter",
  "how to enter for exams": "booking-how-to-enter",
  "when are booking deadlines": "booking-deadlines",
  "what are booking deadlines": "booking-deadlines",
  "when is the registration deadline": "booking-deadlines",
  "can i take exams in any order": "booking-order",
  "can i take the atq qualification exams in any order": "booking-order",
  "how many exams can i take per session": "booking-max-exams",
  "how many exams can i take at each exam session": "booking-max-exams",
  "how many exams can i take": "booking-max-exams",
  "what if i fail an exam": "booking-fail-resit",
  "if i fail can i resit": "booking-fail-resit",
  "if i fail an exam can i amend my entry to resit the exam in the same session": "booking-fail-resit",
  "can i still sit if i miss deadline": "booking-late",
  "can i still sit my exams if i miss the standard exam booking deadline": "booking-late",
  "can i do late booking": "booking-late",
  "how do i know booking is successful": "booking-success",
  "how do i know if my exam booking has been successful": "booking-success",
  "how do i know booking succeeded": "booking-success",
  "where can i take my exams": "booking-location",
  "where can i take exams": "booking-location",
  "when are results issued": "result-when",
  "when can i take exams": "session-when",
  "exam session dates": "session-when",
  "what if results are incorrect": "result-incorrect",
  "what can i do if i think that my results are incorrect": "result-incorrect",
  "what happens on exam day": "sitting-exam-day",
  "what happens on the exam day": "sitting-exam-day",
  "what documents are required": "sitting-exam-day",
  "contact information": "contact-support",
  "contact kicpaa support": "contact-support",
  "how can i contact kicpaa atq support": "contact-support",
  "contact kicpaa": "contact-support",
  "can i change my booking": "booking-change",
  "i would like to change my exam date is this possible": "booking-change",
  "i would like to change my booking": "booking-change",
  "can i change entry on exam day": "sitting-same-day-change",
  "can i change my entry on the day of the exam": "sitting-same-day-change",
  "where can i find exam rules": "sitting-rules",
  "where can i find the rules and regulations in relation to sitting an examination": "sitting-rules",
  "exam sitting rules": "sitting-rules",
  "exam complaints": "sitting-complaint",
  "if something happens at the exam center that affects my performance can i make a complaint": "sitting-complaint",
  "can i file a complaint": "sitting-complaint",
  "what if i miss the exam": "booking-late",

  // Khmer suggestions -> target FAQ ID
  "តើមានមុខវិជ្ជាអ្វីខ្លះ": "session-available",
  "តើមានមុខវិជ្ជាអ្វីខ្លះដែលអាចប្រឡងបានក្នុងខែនីមួយៗ": "session-available",
  "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?": "booking-how-to-enter",
  "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?": "booking-how-to-enter",
  "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា": "booking-how-to-enter",
  "តើត្រូវចុះឈ្មោះប្រឡងយ៉ាងដូចម្តេច": "booking-how-to-enter",
  "តើកាលបរិច្ឆេទផុតកំណត់នៃការចុះឈ្មោះប្រឡងនៅពេលណា?": "booking-deadlines",
  "តើកាលបរិច្ឆេទផុតកំណត់នៃការចុះឈ្មោះប្រឡងនៅពេលណា": "booking-deadlines",
  "តើអាចប្រឡងតាមលំដាប់ណា": "booking-order",
  "តើខ្ញុំអាចប្រឡងតាមលំដាប់ណា": "booking-order",
  "តើខ្ញុំអាចប្រឡងមុខវិជ្ជា atq តាមលំដាប់ណាមួយក៏បានមែនទេ": "booking-order",
  "តើប្រឡងបានប៉ុន្មានមុខក្នុង១សម័យ": "booking-max-exams",
  "តើប្រឡងបានប៉ុន្មានមុខ": "booking-max-exams",
  "តើខ្ញុំអាចប្រឡងបានប៉ុន្មានមុខវិជ្ជាក្នុងសម័យប្រឡងនីមួយៗ": "booking-max-exams",
  "ចំនួនមុខវិជ្ជាប្រឡង": "booking-max-exams",
  "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?": "booking-fail-resit",
  "បើធ្លាក់តើអាចប្រឡងសងពេលណា": "booking-fail-resit",
  "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?": "booking-fail-resit",
  "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ": "booking-fail-resit",
  "បើហួសកាលកំណត់តើអាចប្រឡងបានទេ": "booking-late",
  "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់": "booking-late",
  "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់?": "booking-late",
  "ដឹងថាកក់បានជោគជ័យដោយរបៀបណា": "booking-success",
  "ដឹងថាកក់ជោគជ័យដោយរបៀបណា": "booking-success",
  "តើខ្ញុំដឹងដោយរបៀបណាថាការកក់ប្រឡងបានជោគជ័យ": "booking-success",
  "ទីតាំងប្រឡងនៅឯណា": "booking-location",
  "តើខ្ញុំអាចប្រឡងនៅទីណា?": "booking-location",
  "តើខ្ញុំអាចប្រឡងនៅទីណា": "booking-location",
  "លទ្ធផលចេញពេលណា": "result-when",
  "តើលទ្ធផលប្រឡងចេញនៅពេលណា": "result-when",
  "តើខ្ញុំអាចធ្វើអ្វីបាន ប្រសិនបើគិតថាលទ្ធផលមិនត្រឹមត្រូវ?": "result-incorrect",
  "តើខ្ញុំអាចធ្វើអ្វីបាន ប្រសិនបើគិតថាលទ្ធផលមិនត្រឹមត្រូវ": "result-incorrect",
  "តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង": "sitting-exam-day",
  "តើខ្ញុំត្រូវយកឯកសារអ្វីខ្លះទៅថ្ងៃប្រឡង?": "sitting-exam-day",
  "តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង?": "sitting-exam-day",
  "តើប្រឡងនៅពេលណា": "session-when",
  "តើខ្ញុំអាចប្រឡងនៅពេលណា": "session-when",
  "កាលវិភាគប្រឡង": "session-when",
  "តើខ្ញុំអាចប្រឡងនៅពេលណា?": "session-when",
  "តើអាចផ្លាស់ប្តូរការកក់បានទេ": "booking-change",
  "តើខ្ញុំអាចផ្លាស់ប្តូរថ្ងៃប្រឡងបានទេ": "booking-change",
  "តើខ្ញុំអាចផ្លាស់ប្តូរថ្ងៃប្រឡងបានទេ?": "booking-change",
  "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?": "contact-support",
  "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ kicpaa atq តាមរបៀបណា": "contact-support",
  "តើអាចប្តូរនៅថ្ងៃប្រឡងបានទេ": "sitting-same-day-change",
  "តើខ្ញុំអាចផ្លាស់ប្តូរការចុះឈ្មោះនៅថ្ងៃប្រឡងបានទេ": "sitting-same-day-change",
  "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់?": "booking-late",
  "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា?": "sitting-rules",
  "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា": "sitting-rules",
  "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា?": "sitting-rules",
  "ប្រសិនបើមានអ្វីកើតឡើងនៅមណ្ឌលប្រឡងប៉ះពាល់ដល់ការប្រឡង តើខ្ញុំអាចតវ៉ាបានទេ?": "sitting-complaint",
  "ប្រសិនបើមានអ្វីកើតឡើងនៅមណ្ឌលប្រឡងប៉ះពាល់ដល់ការប្រឡង តើខ្ញុំអាចតវ៉ាបានទេ": "sitting-complaint",
};

const normalizeChatText = (value = "") =>
  value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[\p{P}\p{S}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

const ignoredEnglishTokens = new Set([
  "a", "an", "the", "is", "are", "am", "was", "were", "be", "been",
  "i", "me", "my", "we", "our", "you", "your", "it", "this", "that",
  "to", "for", "of", "on", "in", "at", "by", "with", "and", "or",
  "can", "could", "would", "should", "do", "does", "did", "how", "what",
  "when", "where", "who", "which", "why", "please", "tell", "about",
]);

// Query matcher with phrase and token scoring for English and Khmer.
function findBestAnswer(rawQuery, lang = "en") {
  const query = normalizeChatText(rawQuery);
  const queryTokens = [...new Set(query.split(" ").filter((token) =>
    token.length > 1 && !ignoredEnglishTokens.has(token),
  ))];

  // 1. Check for Greetings
  const greetings = [
    "hi",
    "hello",
    "hey",
    "greetings",
    "good morning",
    "good afternoon",
    "សួស្តី",
    "ជំរាបសួរ",
  ];
  if (greetings.some((g) => query === g || query.startsWith(g + " "))) {
    if (lang === "km") {
      return {
        text: "សួស្តី! 👋 ខ្ញុំជា **ATQ Assistant** ជំនួយការរបស់ KICPAA។ តើខ្ញុំអាចជួយអ្វីដល់អ្នកថ្ងៃនេះ? អ្នកអាចសួរអំពីកាលវិភាគប្រឡង ការចុះឈ្មោះ ឬលទ្ធផលប្រឡងបាន!",
        suggestions: [
          "តើខ្ញុំអាចប្រឡងនៅពេលណា?",
          "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
          "តើលទ្ធផលប្រឡងចេញនៅពេលណា?",
          "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?",
        ],
      };
    }
    return {
      text: "Hello! 👋 I'm your **KICPAA ATQ Assistant**. How can I help you today? You can ask me about exam sessions, booking procedures, exam rules, or results!",
      suggestions: [
        "When can I take exams?",
        "How can I enter for exams?",
        "Can I take the ATQ Qualification exams in any order?",
        "When are results issued?",
      ],
    };
  }

  // 2. Direct Suggestion Mapping (Ensures clicking suggestion pills always routes to the correct target FAQ)
  const targetFaqId = suggestionTargetMap[query];
  if (targetFaqId) {
    const targetItem = faqKnowledgeBase.find((item) => item.id === targetFaqId);
    if (targetItem) {
      return {
        text: lang === "km" ? targetItem.answerKm : targetItem.answerEn,
        suggestions:
          (lang === "km" ? targetItem.suggestionsKm : targetItem.suggestionsEn) || [],
      };
    }
  }

  // 3. Exact Question or Keyword Match
  const exactItem = faqKnowledgeBase.find((item) =>
    normalizeChatText(item.question) === query ||
    normalizeChatText(item.questionKm) === query ||
    item.keywords.some((keyword) => normalizeChatText(keyword) === query),
  );
  if (exactItem) {
    return {
      text: lang === "km" ? exactItem.answerKm : exactItem.answerEn,
      suggestions:
        (lang === "km" ? exactItem.suggestionsKm : exactItem.suggestionsEn) || [],
    };
  }

  // 4. Direct Contact Request
  const contactTriggers = [
    "contact",
    "agent",
    "human",
    "support",
    "email",
    "phone",
    "telegram",
    "call",
    "ទាក់ទង",
    "ភ្នាក់ងារ",
    "លេខទូរស័ព្ទ",
  ];
  const hasOtherTopic = /\b(exam|booking|register|result|fee|subject|schedule|deadline)\b/i.test(query);
  if (
    !hasOtherTopic &&
    contactTriggers.some((t) => query.includes(normalizeChatText(t)))
  ) {
    const contactItem = faqKnowledgeBase.find(
      (i) => i.id === "contact-support",
    );
    return {
      text: lang === "km" ? contactItem.answerKm : contactItem.answerEn,
      suggestions:
        lang === "km" ? contactItem.suggestionsKm : contactItem.suggestionsEn,
    };
  }

  // 5. Keyword & Token Scoring for custom typed queries
  let bestItem = null;
  let highestScore = 0;
  let secondHighestScore = 0;

  faqKnowledgeBase.forEach((item) => {
    let score = 0;
    const questionEn = normalizeChatText(item.question);
    const questionKm = normalizeChatText(item.questionKm);

    if (query === questionEn || query === questionKm) score += 100;
    else if (
      (questionEn && (questionEn.includes(query) || query.includes(questionEn))) ||
      (questionKm && (questionKm.includes(query) || query.includes(questionKm)))
    ) score += 24;

    const normalizedKeywords = item.keywords.map(normalizeChatText);
    normalizedKeywords.forEach((keyword) => {
      if (keyword && query.includes(keyword)) {
        score += 7 + keyword.split(" ").length * 2;
      }
    });

    queryTokens.forEach((token) => {
      const inQuestion = questionEn.includes(token) || questionKm.includes(token);
      const inKeyword = normalizedKeywords.some((keyword) => keyword.includes(token));
      if (inKeyword) score += 4;
      else if (inQuestion) score += 2;
    });

    if (score > highestScore) {
      secondHighestScore = highestScore;
      highestScore = score;
      bestItem = item;
    } else if (score > secondHighestScore) {
      secondHighestScore = score;
    }
  });

  const hasClearMatch = highestScore >= 7 &&
    (highestScore - secondHighestScore >= 2 || highestScore >= 20);

  if (hasClearMatch && bestItem) {
    return {
      text: lang === "km" ? bestItem.answerKm : bestItem.answerEn,
      suggestions: (lang === "km" ? bestItem.suggestionsKm : bestItem.suggestionsEn) || [],
    };
  }

  // 6. Fallback
  if (lang === "km") {
    return {
      text: "ខ្ញុំមិនបានរកឃើញចម្លើយជាក់លាក់សម្រាប់សំណួរនេះទេ។ ប៉ុន្តែអ្នកអាចជ្រើសរើសប្រធានបទពេញនិយមខាងក្រោម ឬទាក់ទងផ្ទាល់មកកាន់ក្រុមការងារ KICPAA តាមរយៈ **Education@kicpaa.org** ឬទូរស័ព្ទ **+855 17 493 140** (មាន Telegram)។",
      suggestions: [
        "តើខ្ញុំអាចប្រឡងនៅពេលណា?",
        "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
        "តើខ្ញុំអាចប្រឡងតាមលំដាប់ណា?",
        "តើលទ្ធផលប្រឡងចេញនៅពេលណា?",
        "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?",
      ],
    };
  }

  return {
    text: "I couldn't find an exact answer to that specific question. However, here are popular topics, or you can contact our education team directly at **Education@kicpaa.org** or **+855 17 493 140** (Telegram available).",
    suggestions: [
      "When can I take exams?",
      "How can I enter for exams?",
      "Can I take the ATQ Qualification exams in any order?",
      "When are results issued?",
      "How can I contact KICPAA ATQ support?",
    ],
  };
}

const AIChatbot = ({
  isOpen: controlledIsOpen,
  setIsOpen: controlledSetIsOpen,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = controlledSetIsOpen || setInternalIsOpen;

  const [language, setLanguage] = useState("bilingual"); // 'bilingual', 'km', 'en'
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initial messages based on user reference screenshot
  const initialWelcomeMessages = [
    {
      id: "welcome-main",
      sender: "bot",
      isWelcome: true,
      text: `Hi there / សួស្តី! 👋\nHello! I'm your KICPAA ATQ Assistant. How can I help you today? You can ask me about exam sessions, booking procedures, exam rules, or results!\n\nសួស្តី! ខ្ញុំជា ATQ Assistant ជំនួយការរបស់ KICPAA។ តើខ្ញុំអាចជួយអ្វីដល់អ្នកថ្ងៃនេះ? អ្នកអាចសួរអំពីកាលវិភាគប្រឡង ការចុះឈ្មោះ ឬលទ្ធផលប្រឡងបាន!`,
      time: "Oct 6, 1:12 PM",
    },
  ];

  const [messages, setMessages] = useState(initialWelcomeMessages);

  // Global custom event listener
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-atq-chatbot", handleOpen);
    return () => window.removeEventListener("open-atq-chatbot", handleOpen);
  }, [setIsOpen]);

  // Auto scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Handle switching language via bottom pills
  const handleSelectLanguage = (selectedLang) => {
    setLanguage(selectedLang);
    setIsTyping(true);

    setTimeout(() => {
      if (selectedLang === "km") {
        setMessages((prev) => [
          ...prev,
          {
            id: `lang-km-${Date.now()}`,
            sender: "bot",
            text: "សូមស្វាគមន៍មកកាន់ **ភាសាខ្មែរ**! 🇰🇭\nតើអ្នកចង់សាកសួរអំពីអ្វីដែរទាក់ទងនឹងកម្មវិធីប្រឡង ATQ? សូមជ្រើសរើសប្រធានបទ ឬវាយសំណួររបស់អ្នកខាងក្រោម៖",
            suggestions: [
              "តើខ្ញុំអាចប្រឡងនៅពេលណា?",
              "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
              "តើខ្ញុំអាចប្រឡងតាមលំដាប់ណា?",
              "តើលទ្ធផលប្រឡងចេញនៅពេលណា?",
             
            ],
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      } else if (selectedLang === "en") {
        setMessages((prev) => [
          ...prev,
          {
            id: `lang-en-${Date.now()}`,
            sender: "bot",
            text: "Welcome to **English**! 🇬🇧\nWhat would you like to know about the KICPAA ATQ Program? You can choose a quick topic below or type your question:",
            suggestions: [
              "When can I take exams?",
              "How can I enter for exams?",
              "Can I take the ATQ Qualification exams in any order?",
              "When are results issued?",
              "How can I contact KICPAA ATQ support?",
            ],
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }
      setIsTyping(false);
    }, 350);
  };

  // Handle connecting to agent
  const handleConnectAgent = () => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `agent-${Date.now()}`,
          sender: "bot",
          text: `🧑‍💼 **Connecting with KICPAA ATQ Team**\n\nOur education officers are ready to assist you directly:\n\n- 📱 **Telegram / Phone**: [+855 17 493 140](tel:+85517493140)\n- ✉️ **Email**: [Education@kicpaa.org](mailto:Education@kicpaa.org) / [ATQ@kicpaa.org](mailto:ATQ@kicpaa.org)\n- 🏢 **Office Hours**: Monday – Friday (8:00 AM – 5:00 PM)`,
          isAgentContact: true,
          suggestions:
            language === "km"
              ? ["កាលវិភាគប្រឡង", "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?"]
              : ["When can I take exams?", "How can I enter for exams?"],
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setIsTyping(false);
    }, 400);
  };

  // Handle sending a message
  const handleSendMessage = useCallback(
    (textToSend) => {
      const query = (textToSend || inputVal).trim();
      if (!query) return;

      const userMessage = {
        id: `user-${Date.now()}`,
        sender: "user",
        text: query,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputVal("");
      setIsTyping(true);

      setTimeout(() => {
        const containsKhmer = /[\u1780-\u17FF]/.test(query);
        const activeLang = language === "km" || (language === "bilingual" && containsKhmer) ? "km" : "en";
        const response = findBestAnswer(query, activeLang);

        const botMessage = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: response.text,
          suggestions: response.suggestions,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 450);
    },
    [inputVal, language],
  );

  // Reset chat
  const handleClearChat = () => {
    setMessages(initialWelcomeMessages);
    setLanguage("bilingual");
  };

  // Format text renderer for Markdown links and bold text
  const renderFormattedText = (text) => {
    return text.split("\n").map((line, idx) => {
      // Bold text and link any Learning Hub mention.
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      formattedLine = formattedLine.replace(
        /Learning Hub/g,
        '<a href="https://education.kicpaa.org/student/login" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold hover:text-blue-800">Learning Hub</a>',
      );
      // Markdown link [Label](url)
      formattedLine = formattedLine.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold hover:text-blue-800">$1</a>',
      );
      // Inline email
      formattedLine = formattedLine.replace(
        /`([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})`/g,
        '<a href="mailto:$1" class="text-sky-600 underline font-medium hover:text-sky-800">$1</a>',
      );
      // Inline code
      formattedLine = formattedLine.replace(
        /`([^`]+)`/g,
        '<code class="bg-slate-200/60 px-1 py-0.5 rounded text-xs">$1</code>',
      );

      return (
        <span
          key={idx}
          className="block min-h-[1.2em]"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });
  };

  return (
    <>
      {/* 1. Main Chat Window Docked at Bottom-Right */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="ATQ Virtual Assistant"
          className="chat-window-enter fixed bottom-20 left-3 right-3 z-50 flex h-[min(760px,calc(100dvh-7rem))] flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl font-['Poppins',sans-serif] dark:border-slate-800 dark:bg-slate-900 sm:bottom-24 sm:left-auto sm:right-6 sm:w-[min(560px,calc(100vw-3rem))]"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-4 py-3.5 shadow-2xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-200 overflow-hidden dark:bg-slate-800 dark:ring-slate-700">
                <img
                  src={botAvatar}
                  alt="ATQ Bot"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-base font-bold text-slate-800 tracking-tight dark:text-slate-100">
                    KICPAA FAQ{" "}
                  </h4>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleClearChat}
                title="Reset conversation"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors dark:hover:bg-slate-800 dark:hover:text-slate-200"
              >
                <FaRotateRight className="text-xs" aria-hidden="true" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors dark:hover:bg-slate-800 dark:hover:text-slate-200"
              >
                <FaMinus className="text-xs" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5 bg-[#fbfcfd] dark:bg-slate-950">
            {/* Centered Date Separator */}
            <div className="flex items-center justify-center my-1">
              <span className="text-[11px] font-medium text-slate-400 tracking-wide dark:text-slate-500"></span>
            </div>

            {/* Message Bubbles */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] text-sm leading-relaxed shadow-2xs ${
                    msg.sender === "user"
                      ? "rounded-2xl rounded-tr-xs bg-[#0b1a6e] px-4 py-2.5 text-white dark:bg-[#03A9f4] dark:text-slate-950 font-medium"
                      : "rounded-2xl rounded-tl-xs bg-[#f2f4f8] px-4 py-3 text-slate-800 border border-slate-200/50 dark:bg-slate-850 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                  }`}
                >
                  {renderFormattedText(msg.text)}

                  {/* Direct Telegram Action button for Agent Contact */}
                  {msg.isAgentContact && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href="https://t.me/+85517493140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0088cc] px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[#0077b5] transition-all"
                      >
                        <FaTelegram className="text-sm" aria-hidden="true" />{" "}
                        Chat on Telegram
                      </a>
                      <a
                        href="mailto:Education@kicpaa.org"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b1a6e] px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-900 transition-all dark:bg-sky-600 dark:hover:bg-sky-700"
                      >
                        <FaEnvelope className="text-xs" aria-hidden="true" />{" "}
                        Email Education
                      </a>
                    </div>
                  )}
                </div>

                {/* Suggestions Pills attached to bot message */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 pl-1 max-w-[95%]">
                    {msg.suggestions.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSendMessage(sug)}
                        className="cursor-pointer rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-2xs transition-all hover:border-[#03A9f4] hover:bg-sky-50/70 hover:text-[#0b1a6e] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-[#03A9f4]"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Animation */}
            {isTyping && (
              <div className="flex items-center gap-1.5 rounded-2xl bg-[#f2f4f8] border border-slate-200/60 px-3.5 py-2.5 w-fit shadow-2xs dark:bg-slate-800 dark:border-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-[#03A9f4] animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#03A9f4] animate-bounce [animation-delay:0.2s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#03A9f4] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Action Toolbar: 3 Pill Buttons (Matches reference screenshot) */}
          <div className="border-t border-slate-100 bg-white px-3 pt-2 pb-1.5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center  gap-1.5 overflow-x-auto py-1 no-scrollbar">
              <button
                onClick={() => handleSelectLanguage("km")}
                className={`cursor-pointer inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all shrink-0 shadow-2xs ${
                  language === "km"
                    ? "border-[#03A9f4] bg-sky-50 text-[#0b1a6e] dark:bg-sky-950/70 dark:border-sky-500 dark:text-sky-300"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                <span>🇰🇭</span> <span>ភាសាខ្មែរ</span>
              </button>

              <button
                onClick={() => handleSelectLanguage("en")}
                className={`cursor-pointer inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all shrink-0 shadow-2xs ${
                  language === "en"
                    ? "border-[#03A9f4] bg-sky-50 text-[#0b1a6e] dark:bg-sky-950/70 dark:border-sky-500 dark:text-sky-300"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                <span>🇬🇧</span> <span>English</span>
              </button>

              <button
                onClick={handleConnectAgent}
                className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-all shrink-0 shadow-2xs hover:bg-slate-50 hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                <FaHeadset
                  className="text-xs text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <span>Chat with agent</span>
              </button>
            </div>
          </div>

          {/* Bottom Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="border-t border-slate-200/80 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder={
                  language === "km"
                    ? "សរសេរសំណួរអំពីការប្រឡង ATQ..."
                    : "Ask about ATQ exams, booking, results..."
                }
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-[13px] text-slate-800 placeholder-slate-400 focus:border-[#03A9f4] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#03A9f4] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:bg-slate-800"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#0b1a6e] text-white shadow-xs transition-all hover:bg-[#12368c] disabled:opacity-35 disabled:cursor-not-allowed dark:bg-[#03A9f4] dark:text-slate-950 dark:hover:bg-sky-400"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-xs" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-1 flex items-center justify-center text-[10px] text-slate-400 dark:text-slate-500">
              <span>Powered by KICPAA ATQ Education System</span>
            </div>
          </form>
        </div>
      )}

      {/* 2. Floating Circular Close/Toggle Button at Bottom Right (Matches reference screenshot) */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="qa-session-bubble absolute bottom-[calc(100%+0.9rem)] right-0 w-max max-w-[220px] rounded-2xl rounded-br-sm border border-slate-200 bg-white px-3 py-2 text-left text-[15px] font-medium leading-snug text-slate-700 shadow-xl shadow-slate-900/10 transition hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-300"
          >
            Hello, I'm ATQ Assistant! Any questions?
            <span
              className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 border-b border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
              aria-hidden="true"
            />
          </button>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close ATQ Chatbot" : "Open ATQ Chatbot"}
          className={`chat-launcher flex h-18 w-18 cursor-pointer items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 ${
            isOpen
              ? "bg-[#526071] text-white hover:bg-[#434f5e]"
              : "bg-[#0b1a6e] text-white hover:bg-[#12368c] ring-4 ring-sky-200/50 dark:ring-sky-900/50"
          }`}
        >
          {isOpen ? (
            <FaXmark className="text-lg" aria-hidden="true" />
          ) : (
            <div className="relative flex items-center justify-center">
              <img
                src={botAvatar}
                alt="Bot"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default AIChatbot;
