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
    keywords: ["when", "exam session", "schedule", "timing", "month", "monthly", "four days", "take exams", "ពេលណា", "កាលវិភាគ", "សម័យប្រឡង"],
    answerEn:
      "Students can take session-based exams during our **monthly exam session**. These take place over **4 days every month**.",
    answerKm:
      "សិស្សអាចចូលរួមការប្រឡងតាមសម័យប្រឡងប្រចាំខែរបស់យើង ដែលប្រព្រឹត្តទៅក្នុងរយៈពេល **៤ ថ្ងៃជារៀងរាល់ខែ**។",
    suggestionsEn: ["What exams will be available?", "How can I enter for exams?", "When are booking deadlines?"],
    suggestionsKm: ["តើមានមុខវិជ្ជាអ្វីខ្លះ?", "របៀបចុះឈ្មោះប្រឡង", "កាលបរិច្ឆេទផុតកំណត់"],
  },
  {
    id: "session-available",
    category: "Exam Session",
    question: "What exams will be available at each session?",
    questionKm: "តើមានមុខវិជ្ជាអ្វីខ្លះដែលអាចប្រឡងបានក្នុងសម័យនីមួយៗ?",
    keywords: ["available", "which exams", "what exams", "all 8", "subjects available", "offer", "calendar", "មុខវិជ្ជា", "៨ មុខ"],
    answerEn:
      "For 2024, KICPAA offers **all 8 subjects** for examination every month starting from February. Please check the ATQ Program subjects, exam schedule, and exam important dates for more information.",
    answerKm:
      "សម្រាប់ឆ្នាំ២០២៤ KICPAA ផ្តល់ជូននូវ **មុខវិជ្ជាទាំង ៨** សម្រាប់ការប្រឡងជារៀងរាល់ខែ ចាប់ពីខែកុម្ភៈតទៅ។ សូមពិនិត្យមើលមុខវិជ្ជាកម្មវិធី ATQ និងកាលបរិច្ឆេទសំខាន់ៗសម្រាប់ការប្រឡង។",
    suggestionsEn: ["Can I take exams in any order?", "How many exams can I take per session?", "When are booking deadlines?"],
    suggestionsKm: ["តើអាចប្រឡងតាមលំដាប់ណា?", "តើប្រឡងបានប៉ុន្មានមុខក្នុង១សម័យ?", "របៀបចុះឈ្មោះ"],
  },

  // --- FAQ on Exam Registration and Booking ---
  {
    id: "booking-order",
    category: "Registration & Booking",
    question: "Can I take the ATQ Qualification exams in any order?",
    questionKm: "តើខ្ញុំអាចប្រឡងមុខវិជ្ជា ATQ តាមលំដាប់ណាមួយក៏បានមែនទេ?",
    keywords: ["order", "sequence", "principles first", "technical first", "any order", "level", "prerequisite", "លំដាប់", "កម្រិត", "principles"],
    answerEn:
      "You may take the exam in **any order as long as it stays within the same level**. However, you **must pass the Principles Level first** before you can sit for the Technical Level exam.",
    answerKm:
      "អ្នកអាចប្រឡងតាម **លំដាប់ណាមួយក៏បាន ឲ្យតែស្ថិតក្នុងកម្រិតដូចគ្នា**។ ប៉ុន្តែ អ្នក **ត្រូវតែប្រឡងជាប់កម្រិត Principles Level ជាមុនសិន** ទើបអាចអង្គុយប្រឡងកម្រិត Technical Level បាន។",
    suggestionsEn: ["How many exams can I take per session?", "How can I enter for exams?", "What if I fail an exam?"],
    suggestionsKm: ["តើប្រឡងបានប៉ុន្មានមុខ?", "របៀបចុះឈ្មោះ", "បើប្រឡងធ្លាក់"],
  },
  {
    id: "booking-deadlines",
    category: "Registration & Booking",
    question: "When are the booking deadlines?",
    questionKm: "តើកាលបរិច្ឆេទផុតកំណត់នៃការកក់ការប្រឡងនៅពេលណា?",
    keywords: ["deadline", "booking deadline", "registration deadline", "when to book", "last date", "key dates", "ផុតកំណត់", "ថ្ងៃចុងក្រោយ"],
    answerEn:
      "For exam registration deadlines and key dates for upcoming exam sessions, please visit the **Important Dates for ATQ Exam** or check the Examination tab on the **Learning Hub**.",
    answerKm:
      "សម្រាប់កាលបរិច្ឆេទផុតកំណត់ចុះឈ្មោះប្រឡង និងកាលបរិច្ឆេទសំខាន់ៗ សូមពិនិត្យមើលក្នុងតារាង **Important Dates for ATQ Exam** ឬមើលក្នុងផ្ទាំង Examination លើ **Learning Hub**។",
    suggestionsEn: ["Can I still sit if I miss deadline?", "How do I know booking is successful?", "How can I enter for exams?"],
    suggestionsKm: ["បើហួសកាលកំណត់តើអាចប្រឡងបានទេ?", "ដឹងថាកក់បានជោគជ័យដោយរបៀបណា?", "របៀបចុះឈ្មោះ"],
  },
  {
    id: "booking-max-exams",
    category: "Registration & Booking",
    question: "How many exams can I take at each exam session?",
    questionKm: "តើខ្ញុំអាចប្រឡងបានប៉ុន្មានមុខវិជ្ជាក្នុងសម័យប្រឡងនីមួយៗ?",
    keywords: ["how many", "limit", "maximum", "max exams", "per session", "per year", "calendar year", "ប៉ុន្មានមុខ", "អតិបរមា"],
    answerEn:
      "You can enter a **maximum of four (4) exams per exam session** and a **maximum of eight (8) different exams each calendar year**.",
    answerKm:
      "អ្នកអាចចុះឈ្មោះប្រឡងបាន **អតិបរមា ៤ មុខវិជ្ជាក្នុងមួយសម័យប្រឡង** និង **អតិបរមា ៨ មុខវិជ្ជាផ្សេងគ្នាក្នុងមួយឆ្នាំ**។",
    suggestionsEn: ["Can I take exams in any order?", "Where can I take my exams?", "What if I fail an exam?"],
    suggestionsKm: ["តើអាចប្រឡងតាមលំដាប់ណា?", "ទីតាំងប្រឡងនៅឯណា?", "បើប្រឡងធ្លាក់"],
  },
  {
    id: "booking-fail-resit",
    category: "Registration & Booking",
    question: "If I fail an exam, will I be able to amend my entry so I can resit at this session?",
    questionKm: "ប្រសិនបើខ្ញុំធ្លាក់ តើអាចកែប្រែដើម្បីប្រឡងសងក្នុងសម័យប្រឡងនេះបានទេ?",
    keywords: ["fail", "failed", "resit", "retake", "same session", "amend entry", "ធ្លាក់", "ប្រឡងសង", "កែប្រែ"],
    answerEn:
      "**No.** If you failed this exam session, you have to resit your exam in the **next session only**.",
    answerKm:
      "**មិនបានទេ។** ប្រសិនបើអ្នកធ្លាក់ក្នុងសម័យប្រឡងនេះ អ្នកត្រូវតែប្រឡងសងនៅ **សម័យប្រឡងបន្ទាប់ប៉ុណ្ណោះ**។",
    suggestionsEn: ["When are results issued?", "What if results are incorrect?", "How many exams can I take?"],
    suggestionsKm: ["លទ្ធផលចេញពេលណា?", "បើលទ្ធផលមិនត្រឹមត្រូវ?", "ចំនួនមុខវិជ្ជាប្រឡង"],
  },
  {
    id: "booking-location",
    category: "Registration & Booking",
    question: "Where can I take my exams?",
    questionKm: "តើខ្ញុំអាចប្រឡងនៅទីណា?",
    keywords: ["where", "location", "center", "centre", "examination center", "venue", "place", "address", "កន្លែងប្រឡង", "ទីតាំង", "មណ្ឌល"],
    answerEn:
      "Your examination center can be found in your **Examination Identification Document** available to print after your registration.",
    answerKm:
      "មណ្ឌលប្រឡងរបស់អ្នកមានបញ្ជាក់ក្នុង **Examination Identification Document** ដែលអ្នកអាចបោះពុម្ពបានបន្ទាប់ពីចុះឈ្មោះរួច។",
    suggestionsEn: ["What happens on exam day?", "What documents are required?", "Contact information"],
    suggestionsKm: ["តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង?", "ឯកសារចាំបាច់", "ព័ត៌មានទំនាក់ទំនង"],
  },
  {
    id: "booking-how-to-enter",
    category: "Registration & Booking",
    question: "How can I enter for exams?",
    questionKm: "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា?",
    keywords: ["how can i enter", "how to register", "how to book", "register", "steps", "learning hub", "exam fee", "របៀបចុះឈ្មោះ", "របៀបកក់"],
    answerEn:
      "To enter for exams:\n1. You must be a **student member of KICPAA** and have paid your exam fee.\n2. Register **30 days in advance** on the **Learning Hub**.\n3. Go to **Examination** > **SELECT YOUR NEXT EXAMINATION DATE** > **SELECT SUBJECT**.\n4. Select your desired date from the list.",
    answerKm:
      "ដើម្បីចុះឈ្មោះប្រឡង៖\n១. អ្នកត្រូវតែជា **សមាជិកសិស្សរបស់ KICPAA** និងបានបង់ថ្លៃប្រឡងរួចរាល់។\n២. អ្នកអាចចុះឈ្មោះមុន **៣០ ថ្ងៃ** តាមរយៈ **Learning Hub**។\n៣. ចូលទៅ **Examination** > **SELECT YOUR NEXT EXAMINATION DATE** > **SELECT SUBJECT**។\n៤. ជ្រើសរើសកាលបរិច្ឆេទដែលអ្នកចង់ប្រឡង។",
    suggestionsEn: ["When can I take exams?", "What are booking deadlines?", "Can I do late booking?"],
    suggestionsKm: ["តើប្រឡងនៅពេលណា?", "កាលបរិច្ឆេទផុតកំណត់", "ការចុះឈ្មោះយឺតយ៉ាវ"],
  },
  {
    id: "booking-late",
    category: "Registration & Booking",
    question: "Can I still sit my exams if I miss the standard exam booking deadline?",
    questionKm: "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានកាលបរិច្ឆេទកំណត់?",
    keywords: ["miss", "late", "late booking", "after deadline", "request late", "យឺត", "ខកខាន", "ហួសពេល"],
    answerEn:
      "If you are a student member and already paid your exam fee, you may request **Late Exam Booking**:\n- **Email**: `education@kicpaa.org`\n- **Subject**: *\"Request for Late Exam Booking\"*\n- **Provide**: Full name, Student ID, Subject, Phone number, and specific reason.\n*(Note: Other means of communication besides email are deemed invalid.)*",
    answerKm:
      "ប្រសិនបើអ្នកជាសមាជិកសិស្ស និងបានបង់ថ្លៃប្រឡងរួចហើយ អ្នកអាចស្នើសុំ **Late Exam Booking**៖\n- **អ៊ីមែល**: `education@kicpaa.org`\n- **ចំណងជើង**: *\"Request for Late Exam Booking\"*\n- **ផ្ញើព័ត៌មាន**: ឈ្មោះពេញ, Student ID, មុខវិជ្ជា, លេខទូរស័ព្ទ និងមូលហេតុជាក់លាក់។\n*(ចំណាំ៖ ការទំនាក់ទំនងក្រៅពីអ៊ីមែល គឺមិនមានសុពលភាពឡើយ)*",
    suggestionsEn: ["Can I change my booking?", "How do I know booking succeeded?", "Contact KICPAA support"],
    suggestionsKm: ["តើអាចផ្លាស់ប្តូរការកក់បានទេ?", "ដឹងថាកក់ជោគជ័យដោយរបៀបណា?", "ទំនាក់ទំនង"],
  },
  {
    id: "booking-success",
    category: "Registration & Booking",
    question: "How do I know if my exam booking has been successful?",
    questionKm: "តើខ្ញុំដឹងដោយរបៀបណាថាការកក់ប្រឡងបានជោគជ័យ?",
    keywords: ["successful", "confirm", "confirmation", "status", "verify", "ជោគជ័យ", "បញ្ជាក់", "ពិនិត្យ"],
    answerEn:
      "When booking for an exam, ensure you **saved the exam schedule**. Once saved, you will see your exam booking on the **Examination Tab**.\n\nMoreover, KICPAA sends the **Exam Identification Document** and details via your registered email address.",
    answerKm:
      "នៅពេលកក់ការប្រឡង សូមប្រាកដថាអ្នកបាន **Save the exam schedule**។ នៅពេលរក្សាទុករួច អ្នកនឹងឃើញការកក់នៅលើ **Examination Tab**។\n\nលើសពីនេះ KICPAA នឹងផ្ញើ **Exam Identification Document** ទៅកាន់អ៊ីមែលរបស់អ្នក។",
    suggestionsEn: ["Where can I take exams?", "Can I change my booking?", "What happens on exam day?"],
    suggestionsKm: ["ទីតាំងប្រឡង", "តើអាចផ្លាស់ប្តូរការកក់បានទេ?", "ថ្ងៃប្រឡង"],
  },
  {
    id: "booking-change",
    category: "Registration & Booking",
    question: "I would like to change my exam booking, is this possible?",
    questionKm: "តើខ្ញុំអាចផ្លាស់ប្តូរការកក់ប្រឡងបានទេ?",
    keywords: ["change", "cancel", "reschedule", "modify booking", "postpone", "ផ្លាស់ប្តូរ", "ប្តូរថ្ងៃ", "លុបចោល"],
    answerEn:
      "Yes, you can make changes up to the **Late Exam Booking Deadline** by emailing `education@kicpaa.org` with:\n- Full name, Student ID, Subject, Phone number, specific reason, and relevant subjects.\n- Allowed requests: **Exam cancelation** or **Change exam schedule**.\n*(Any request after the Late Exam Booking Deadline is invalid.)*",
    answerKm:
      "បាទ/ចាស អ្នកអាចស្នើសុំកែប្រែរហូតដល់ **Late Exam Booking Deadline** ដោយផ្ញើអ៊ីមែលទៅ `education@kicpaa.org` ដោយបញ្ជាក់៖\n- ឈ្មោះពេញ, Student ID, មុខវិជ្ជា, លេខទូរស័ព្ទ, មូលហេតុ និងមុខវិជ្ជាពាក់ព័ន្ធ។\n- ការស្នើសុំដែលអនុញ្ញាត៖ **លុបចោលការប្រឡង (Cancelation)** ឬ **ប្តូរកាលវិភាគ (Reschedule)**។",
    suggestionsEn: ["Can I change entry on exam day?", "When are booking deadlines?", "Contact KICPAA"],
    suggestionsKm: ["តើអាចប្តូរនៅថ្ងៃប្រឡងបានទេ?", "កាលបរិច្ឆេទផុតកំណត់", "ទំនាក់ទំនង"],
  },

  // --- FAQ about Exam Sitting ---
  {
    id: "sitting-exam-day",
    category: "Exam Sitting",
    question: "What happens on the exam day?",
    questionKm: "តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង?",
    keywords: ["exam day", "what happens", "procedure", "id", "passport", "arrive", "check in", "ថ្ងៃប្រឡង", "នីតិវិធី", "អត្តសញ្ញាណប័ណ្ណ"],
    answerEn:
      "On exam day:\n1. Your **Examination Identification Document** has your timetable, seating arrangement, and center address.\n2. Bring your **Exam Identification Document** and **Original National ID/Passport**. These will be checked and verified upon entry.\n3. Make sure to arrive early and review the regulations detailed on the document.\n\nNeed help on location? Contact **017 493 140** (Telegram available).",
    answerKm:
      "នៅថ្ងៃប្រឡង៖\n១. ឯកសារ **Examination Identification Document** បង្ហាញកាលវិភាគ លេខកៅអី និងទីតាំងមណ្ឌលប្រឡង។\n២. ត្រូវយក **Exam Identification Document** និង **អត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ/លិខិតឆ្លងដែនច្បាប់ដើម** មកជាមួយ ដើម្បីពិនិត្យផ្ទៀងផ្ទាត់។\n៣. បើមិនច្បាស់ពីទីតាំង សូមទាក់ទងលេខ **017 493 140** (មាន Telegram)។",
    suggestionsEn: ["Where can I find exam rules?", "Can I change entry on exam day?", "Exam complaints"],
    suggestionsKm: ["ច្បាប់និងបទប្បញ្ញត្តិ", "តើអាចប្តូរនៅថ្ងៃប្រឡងបានទេ?", "ការតវ៉ា"],
  },
  {
    id: "sitting-rules",
    category: "Exam Sitting",
    question: "Where can I find the rules and regulations in relation to sitting an examination?",
    questionKm: "តើខ្ញុំអាចស្វែងរកច្បាប់និងបទប្បញ្ញត្តិស្តីពីការប្រឡងនៅឯណា?",
    keywords: ["rules", "regulations", "guidelines", "equipment", "allowed", "prohibited", "ច្បាប់", "បទបញ្ជា", "វិន័យ"],
    answerEn:
      "Full details of the rules and regulations are available on the **reverse side of your Examination Identification Document**. Please familiarise yourself with these prior to attending the examination center.",
    answerKm:
      "ព័ត៌មានលម្អិតអំពីច្បាប់ និងបទប្បញ្ញត្តិ មានបញ្ជាក់នៅលើ **ផ្នែកខាងក្រោយនៃ Examination Identification Document** របស់អ្នក។ សូមអានស្វែងយល់មុនពេលចូលរួមការប្រឡង។",
    suggestionsEn: ["What happens on exam day?", "Can I change entry on exam day?", "Can I file a complaint?"],
    suggestionsKm: ["ថ្ងៃប្រឡង", "តើអាចប្តូរនៅថ្ងៃប្រឡងបានទេ?", "ការតវ៉ា"],
  },
  {
    id: "sitting-same-day-change",
    category: "Exam Sitting",
    question: "Can I change my entry on the day of the exam?",
    questionKm: "តើខ្ញុំអាចផ្លាស់ប្តូរការចុះឈ្មោះនៅថ្ងៃប្រឡងបានទេ?",
    keywords: ["change on the day", "day of exam", "switch subject", "last minute change", "ប្តូរនៅថ្ងៃប្រឡង", "ប្តូរមុខវិជ្ជា"],
    answerEn:
      "**No.** Students are **not allowed** to change their exam entry on the day of the exam.",
    answerKm:
      "**មិនបានឡើយ។** សិស្សមិនត្រូវបានអនុញ្ញាតឱ្យផ្លាស់ប្តូរការចុះឈ្មោះរបស់ពួកគេនៅថ្ងៃប្រឡងនោះទេ។",
    suggestionsEn: ["What if I miss the exam?", "I would like to change my booking", "Exam sitting rules"],
    suggestionsKm: ["បើខកខានប្រឡង", "ផ្លាស់ប្តូរការកក់មុនថ្ងៃកំណត់", "ច្បាប់ប្រឡង"],
  },
  {
    id: "sitting-complaint",
    category: "Exam Sitting",
    question: "If something happens at the exam center that affects my performance, can I make a complaint?",
    questionKm: "ប្រសិនបើមានអ្វីកើតឡើងនៅមណ្ឌលប្រឡងប៉ះពាល់ដល់ការប្រឡង តើខ្ញុំអាចតវ៉ាបានទេ?",
    keywords: ["complaint", "issue", "condition", "affect performance", "problem", "dissatisfied", "តវ៉ា", "ប្តឹង", "បញ្ហា"],
    answerEn:
      "KICPAA makes every effort to ensure fair conditions. If you feel conditions affected your performance, inform KICPAA directly by email to `education@kicpaa.org`.",
    answerKm:
      "KICPAA តែងតែខិតខំប្រឹងប្រែងឱ្យអស់ពីសមត្ថភាពដើម្បីធានាលក្ខខណ្ឌប្រឡងល្អបំផុត។ ប្រសិនបើអ្នកមានអារម្មណ៍ថាលក្ខខណ្ឌប៉ះពាល់ដល់ការប្រឡង សូមជូនដំណឹងផ្ទាល់ទៅកាន់ `education@kicpaa.org`។",
    suggestionsEn: ["When are results issued?", "What if results are incorrect?", "Contact information"],
    suggestionsKm: ["លទ្ធផលចេញពេលណា?", "បើលទ្ធផលមិនត្រឹមត្រូវ", "ព័ត៌មានទំនាក់ទំនង"],
  },

  // --- FAQ about Exam Result ---
  {
    id: "result-when",
    category: "Exam Result",
    question: "When are results issued?",
    questionKm: "តើលទ្ធផលប្រឡងចេញនៅពេលណា?",
    keywords: ["results", "issued", "scores", "mark", "when result", "submission", "លទ្ធផល", "ពិន្ទុ", "ចេញពេលណា"],
    answerEn:
      "The exam result will be available **immediately after your submission**.",
    answerKm:
      "លទ្ធផលប្រឡងនឹងមាន **ភ្លាមៗបន្ទាប់ពីអ្នកចុចបញ្ជូន (Submission)** រួចរាល់។",
    suggestionsEn: ["What if results are incorrect?", "If I fail, can I resit?", "Exam session dates"],
    suggestionsKm: ["បើលទ្ធផលមិនត្រឹមត្រូវ", "បើធ្លាក់តើអាចប្រឡងសងពេលណា?", "កាលបរិច្ឆេទប្រឡង"],
  },
  {
    id: "result-incorrect",
    category: "Exam Result",
    question: "What can I do if I think that my results are incorrect?",
    questionKm: "តើខ្ញុំអាចធ្វើអ្វីបាន ប្រសិនបើគិតថាលទ្ធផលមិនត្រឹមត្រូវ?",
    keywords: ["incorrect", "review", "recheck", "appeal", "wrong score", "re-mark", "ពិនិត្យឡើងវិញ", "មិនត្រឹមត្រូវ", "ពិន្ទុខុស"],
    answerEn:
      "You can request an **exam result review** by emailing `education@kicpaa.org` with your full name, student ID, subject, and reason.",
    answerKm:
      "អ្នកអាចស្នើសុំការ **ពិនិត្យលទ្ធផលប្រឡងឡើងវិញ (Exam Result Review)** ដោយផ្ញើអ៊ីមែលទៅកាន់ `education@kicpaa.org`។",
    suggestionsEn: ["When are results issued?", "If I fail, can I resit?", "Contact information"],
    suggestionsKm: ["លទ្ធផលចេញពេលណា?", "បើធ្លាក់", "ព័ត៌មានទំនាក់ទំនង"],
  },
  {
    id: "contact-support",
    category: "Contact",
    question: "How can I contact KICPAA ATQ support?",
    questionKm: "តើខ្ញុំអាចទាក់ទងផ្នែកជំនួយ KICPAA ATQ តាមរបៀបណា?",
    keywords: ["contact", "support", "email", "phone", "telegram", "call", "helpdesk", "office", "ទាក់ទង", "លេខទូរស័ព្ទ", "អ៊ីមែល"],
    answerEn:
      "**KICPAA ATQ Support Contacts**:\n- ✉️ **Email**: `Education@kicpaa.org` / `ATQ@kicpaa.org`\n- 📞 **Phone / Telegram**: `+855 17 493 140`\n- 🌐 **Platform**: KICPAA Learning Hub",
    answerKm:
      "**ព័ត៌មានទំនាក់ទំនង KICPAA ATQ**៖\n- ✉️ **អ៊ីមែល**: `Education@kicpaa.org` / `ATQ@kicpaa.org`\n- 📞 **ទូរស័ព្ទ / Telegram**: `+855 17 493 140`\n- 🌐 **ប្រព័ន្ធ**: KICPAA Learning Hub",
    suggestionsEn: ["When can I take exams?", "How can I enter for exams?", "When are booking deadlines?"],
    suggestionsKm: ["តើប្រឡងនៅពេលណា?", "របៀបចុះឈ្មោះប្រឡង", "កាលបរិច្ឆេទផុតកំណត់"],
  },
];

// Query Matcher supporting English & Khmer
function findBestAnswer(rawQuery, lang = "en") {
  const query = rawQuery.toLowerCase().trim();

  // 1. Check for Greetings
  const greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "សួស្តី", "ជំរាបសួរ"];
  if (greetings.some((g) => query === g || query.startsWith(g + " "))) {
    if (lang === "km") {
      return {
        text: "សួស្តី! 👋 ខ្ញុំជា **ATQ Assistant** ជំនួយការរបស់ KICPAA។ តើខ្ញុំអាចជួយអ្វីដល់អ្នកថ្ងៃនេះ? អ្នកអាចសួរអំពីកាលវិភាគប្រឡង ការចុះឈ្មោះ ឬលទ្ធផលប្រឡងបាន!",
        suggestions: ["តើខ្ញុំអាចប្រឡងនៅពេលណា?", "តើត្រូវចុះឈ្មោះប្រឡងយ៉ាងដូចម្តេច?", "តើលទ្ធផលប្រឡងចេញនៅពេលណា?", "ទំនាក់ទំនង"],
      };
    }
    return {
      text: "Hello! 👋 I'm your **KICPAA ATQ Assistant**. How can I help you today? You can ask me about exam sessions, booking procedures, exam rules, or results!",
      suggestions: ["When can I take exams?", "How can I enter for exams?", "Can I take exams in any order?", "When are results issued?"],
    };
  }

  // 2. Direct Contact Request
  const contactTriggers = ["contact", "agent", "human", "support", "email", "phone", "telegram", "call", "ទាក់ទង", "ភ្នាក់ងារ", "លេខទូរស័ព្ទ"];
  if (contactTriggers.some((t) => query.includes(t))) {
    const contactItem = faqKnowledgeBase.find((i) => i.id === "contact-support");
    return {
      text: lang === "km" ? contactItem.answerKm : contactItem.answerEn,
      suggestions: lang === "km" ? contactItem.suggestionsKm : contactItem.suggestionsEn,
    };
  }

  // 3. Keyword & Token Scoring
  let bestItem = null;
  let highestScore = 0;

  faqKnowledgeBase.forEach((item) => {
    let score = 0;
    const lowerQuestion = item.question.toLowerCase();
    const lowerQuestionKm = (item.questionKm || "").toLowerCase();

    // Exact or substring match on question
    if (lowerQuestion.includes(query) || query.includes(lowerQuestion)) score += 20;
    if (lowerQuestionKm && (lowerQuestionKm.includes(query) || query.includes(lowerQuestionKm))) score += 20;

    // Keyword hits
    item.keywords.forEach((keyword) => {
      const lowerKw = keyword.toLowerCase();
      if (query.includes(lowerKw)) {
        score += lowerKw.split(" ").length * 4;
      }
    });

    // Token match
    const tokens = query.split(/\s+/).filter((t) => t.length > 2);
    tokens.forEach((t) => {
      if (lowerQuestion.includes(t)) score += 2;
      if (lowerQuestionKm.includes(t)) score += 2;
      item.keywords.forEach((kw) => {
        if (kw.includes(t)) score += 1;
      });
    });

    if (score > highestScore) {
      highestScore = score;
      bestItem = item;
    }
  });

  if (highestScore >= 3 && bestItem) {
    return {
      text: lang === "km" ? bestItem.answerKm : bestItem.answerEn,
      suggestions: lang === "km" ? bestItem.suggestionsKm : bestItem.suggestionsEn,
    };
  }

  // Fallback
  if (lang === "km") {
    return {
      text: "ខ្ញុំមិនបានរកឃើញចម្លើយជាក់លាក់សម្រាប់សំណួរនេះទេ។ ប៉ុន្តែអ្នកអាចជ្រើសរើសប្រធានបទពេញនិយមខាងក្រោម ឬទាក់ទងផ្ទាល់មកកាន់ក្រុមការងារ KICPAA តាមរយៈ **Education@kicpaa.org** ឬទូរស័ព្ទ **+855 17 493 140** (មាន Telegram)។",
      suggestions: [
        "តើខ្ញុំអាចប្រឡងនៅពេលណា?",
        "តើត្រូវចុះឈ្មោះប្រឡងយ៉ាងដូចម្តេច?",
        "តើខ្ញុំអាចប្រឡងតាមលំដាប់ណា?",
        "តើលទ្ធផលប្រឡងចេញនៅពេលណា?",
        "ទំនាក់ទំនង",
      ],
    };
  }

  return {
    text: "I couldn't find an exact answer to that specific question. However, here are popular topics, or you can contact our education team directly at **Education@kicpaa.org** or **+855 17 493 140** (Telegram available).",
    suggestions: [
      "When can I take exams?",
      "How can I enter for exams?",
      "Can I take exams in any order?",
      "When are results issued?",
      "How can I contact KICPAA ATQ support?",
    ],
  };
}

const AIChatbot = ({ isOpen: controlledIsOpen, setIsOpen: controlledSetIsOpen }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
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
      text: `Hi there / សួស្តី! 👋\nI'm ATQ Assistant, your virtual assistant (Beta). I'm still learning, so I might not have all the answers yet, but I'll try to assist you the best I can nah!\nSelect your language, or connect with an agent right away.\n\nខ្ញុំឈ្មោះ ATQ Assistant ជាជំនួយការឆ្លាតវៃរបស់អ្នក (ដំណាក់កាលសាកល្បង)។ ខ្ញុំនៅតែសិក្សា ដូច្នេះខ្ញុំអាចមិនមានចម្លើយទាំងអស់នៅឡើយទេ ប៉ុន្តែខ្ញុំនឹងព្យាយាមជួយអ្នកអោយបានល្អបំផុតណា!\nជ្រើសរើសភាសា ឬភ្ជាប់ជាមួយភ្នាក់ងារភ្លាមៗ`,
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
              "តើត្រូវចុះឈ្មោះប្រឡងយ៉ាងដូចម្តេច?",
              "តើខ្ញុំអាចប្រឡងតាមលំដាប់ណា?",
              "តើលទ្ធផលប្រឡងចេញនៅពេលណា?",
              "ព័ត៌មានទំនាក់ទំនង",
            ],
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
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
              "Can I take exams in any order?",
              "When are results issued?",
              "How can I contact KICPAA ATQ support?",
            ],
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
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
          text: `🧑‍💼 **Connecting with KICPAA Education Team**\n\nOur education officers are ready to assist you directly:\n\n- 📱 **Telegram / Phone**: [+855 17 493 140](tel:+85517493140)\n- ✉️ **Email**: [Education@kicpaa.org](mailto:Education@kicpaa.org) / [ATQ@kicpaa.org](mailto:ATQ@kicpaa.org)\n- 🏢 **Office Hours**: Monday – Friday (8:00 AM – 5:00 PM)`,
          isAgentContact: true,
          suggestions: language === "km" ? ["កាលវិភាគប្រឡង", "របៀបចុះឈ្មោះប្រឡង"] : ["When can I take exams?", "How can I enter for exams?"],
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 400);
  };

  // Handle sending a message
  const handleSendMessage = useCallback((textToSend) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const activeLang = language === "km" ? "km" : "en";
      const response = findBestAnswer(query, activeLang);

      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.text,
        suggestions: response.suggestions,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  }, [inputVal, language]);

  // Reset chat
  const handleClearChat = () => {
    setMessages(initialWelcomeMessages);
    setLanguage("bilingual");
  };

  // Format text renderer for Markdown links and bold text
  const renderFormattedText = (text) => {
    return text.split("\n").map((line, idx) => {
      // Bold
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      // Markdown link [Label](url)
      formattedLine = formattedLine.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold hover:text-blue-800">$1</a>'
      );
      // Inline email
      formattedLine = formattedLine.replace(
        /`([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})`/g,
        '<a href="mailto:$1" class="text-sky-600 underline font-medium hover:text-sky-800">$1</a>'
      );
      // Inline code
      formattedLine = formattedLine.replace(/`([^`]+)`/g, '<code class="bg-slate-200/60 px-1 py-0.5 rounded text-xs">$1</code>');

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
                <img src={botAvatar} alt="ATQ Bot" className="h-full w-full object-cover" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-base font-bold text-slate-800 tracking-tight dark:text-slate-100">ATQ Assistant</h4>
                  <span className="rounded-full bg-sky-100 px-1.5 py-0.2 text-[9px] font-bold text-[#03A9f4] dark:bg-sky-950/70">Beta</span>
                </div>
                <p className="text-xs text-slate-500 font-medium dark:text-slate-400">KICPAA Virtual Assistant • Online</p>
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
              <span className="text-[11px] font-medium text-slate-400 tracking-wide dark:text-slate-500">
                
              </span>
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
                        <FaTelegram className="text-sm" aria-hidden="true" /> Chat on Telegram
                      </a>
                      <a
                        href="mailto:Education@kicpaa.org"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b1a6e] px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-900 transition-all dark:bg-sky-600 dark:hover:bg-sky-700"
                      >
                        <FaEnvelope className="text-xs" aria-hidden="true" /> Email Education
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
                <FaHeadset className="text-xs text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close ATQ Chatbot" : "Open ATQ Chatbot"}
          className={`chat-launcher flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 ${
            isOpen
              ? "bg-[#526071] text-white hover:bg-[#434f5e]"
              : "bg-[#0b1a6e] text-white hover:bg-[#12368c] ring-4 ring-sky-200/50 dark:ring-sky-900/50"
          }`}
        >
          {isOpen ? (
            <FaXmark className="text-lg" aria-hidden="true" />
          ) : (
            <div className="relative flex items-center justify-center">
              <img src={botAvatar} alt="Bot" className="h-10 w-10 rounded-full object-cover" />
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
