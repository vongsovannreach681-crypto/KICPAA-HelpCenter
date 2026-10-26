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
import { useLanguage } from "../../context/LanguageContext";

// Comprehensive Bilingual Knowledge Base for KICPAA ATQ Program
const faqKnowledgeBase = [
  // --- Category: Exam Session ---
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
      "Students can take the exams during KICPAA’s monthly exam sessions, which run for four days each month.",
    answerKm:
      "សិស្សអាចចូលរួមការប្រឡងតាមសម័យប្រឡងប្រចាំខែរបស់យើង ដែលប្រព្រឹត្តទៅក្នុងរយៈពេល ៤ ថ្ងៃជារៀងរាល់ខែ។",
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
      "Every year, KICPAA offers all eight subjects for examination each month, from January to December. Please refer to the ATQ Program Subjects, Exam Schedule, and Important Exam Dates for more information.",
    answerKm:
      "ជារៀងរាល់ឆ្នាំ វ.គ.ស.ក.ផ្តល់ជូននូវ មុខវិជ្ជាទាំង ៨ សម្រាប់ការប្រឡងជារៀងរាល់ខែ ចាប់ពីខែមករា ដល់ ខែធ្នូ។ សូមពិនិត្យមើលមុខវិជ្ជាកម្មវិធី ATQ និងកាលបរិច្ឆេទសំខាន់ៗសម្រាប់ការប្រឡង។",
  },

  // --- Category: Registration & Booking ---
  {
    id: "booking-order",
    category: "Registration & Booking",
    question: "Can I take the ATQ exams in any order?",
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
      "Yes! You may take the exam in any order.",
    answerKm:
      "បាទ/ចាស! លោកអ្នកអាចប្រឡងតាមលំដាប់ណាមួយក៏បាន។",
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
      "The exam registration deadline is the 15th of each month.",
    answerKm:
      "កាលបរិច្ឆេទផុតកំណត់ចុះឈ្មោះប្រឡងគឺនៅរៀងរាល់ថ្ងៃទី១៥ នៃខែនីមួយៗ។",
  },
  {
    id: "booking-max-exams",
    category: "Registration & Booking",
    question: "How many subjects can I take in each exam session?",
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
      "You can register for a maximum of eight (8) subjects per exam session.",
    answerKm:
      "អ្នកអាចចុះឈ្មោះប្រឡងបានទាំង ៨មុខវិជ្ជា ក្នុង មួយសម័យប្រឡង។",
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
      "បើធ្លាក់តើអាចប្រឡងសងពេលណា",
    ],
    answerEn:
      "No. If you fail an exam, you must resit it in the next exam session.",
    answerKm:
      "មិនបានទេ។ ប្រសិនបើអ្នកធ្លាក់ក្នុងសម័យប្រឡងនេះ អ្នកត្រូវតែប្រឡងសងនៅ សម័យប្រឡងបន្ទាប់ប៉ុណ្ណោះ។",
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
      "Your examination center can be found in your Examination Identification Document available to print after your registration.",
    answerKm:
      "មណ្ឌលប្រឡងរបស់អ្នកមានបញ្ជាក់ក្នុង Examination Identification Document ដែលអ្នកអាចបោះពុម្ពបានបន្ទាប់ពីចុះឈ្មោះរួច។",
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
      "តើត្រូវចុះឈ្មោះប្រឡងយ៉ាងដូចម្តេច",
      "តើខ្ញុំអាចចុះឈ្មោះប្រឡងដោយរបៀបណា",
      "របៀបកក់",
    ],
    answerEn:
      "To enter for exams:\n1. Ensure you are an approved **student member of KICPAA** and have paid your fees.\n2. Log into the **Learning Hub** 15–30 days in advance.\n3. Navigate to **Examination** > **SELECT YOUR NEXT EXAMINATION DATE** > **SELECT SUBJECT**.\n4. Choose your preferred date from the available schedule and save.",
    answerKm:
      "ដើម្បីចុះឈ្មោះប្រឡង៖\n១. អ្នកត្រូវតែជា **សមាជិកសិស្សរបស់ វ.គ.ស.ក.** និងបានបង់ថ្លៃប្រឡងរួចរាល់។\n២. ចូលទៅកាន់ **Learning Hub** មុន ១៥-៣០ ថ្ងៃ។\n៣. ចូលទៅ **Examination** > **SELECT YOUR NEXT EXAMINATION DATE** > **SELECT SUBJECT**។\n៤. ជ្រើសរើសកាលបរិច្ឆេទដែលអ្នកចង់ប្រឡង រួចចុច Save។",
  },
  {
    id: "booking-late",
    category: "Registration & Booking",
    question:
      "Can I still sit my exams if I miss the standard exam registration deadline?",
    questionKm: "តើខ្ញុំនៅតែអាចប្រឡងបានទេ ប្រសិនបើខកខានចុះឈ្មោះតាមកាលបរិច្ឆេទកំណត់?",
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
    ],
    answerEn:
      'If you have already paid the exam fee, you may request an exam registration form through the following:\n- **Email**: `education@kicpaa.org`\n- **Subject**: *"Request for Late Exam Booking"*\n- **Include**: Full name, Student ID, Subject, Phone number, and specific reason.\n',
    answerKm:
      'ប្រសិនបើលោកអ្នកបានបង់ថ្លៃប្រឡងរួចហើយ លោកអ្នកអាចស្នើសុំទម្រង់ចុះឈ្មោះប្រឡងតាមរយៈ៖\n- **អ៊ីមែល**: `education@kicpaa.org`\n- **ចំណងជើង**: *"Request for Late Exam Booking"*\n- **ផ្ញើព័ត៌មាន**: ឈ្មោះពេញ, Student ID, មុខវិជ្ជា, លេខទូរស័ព្ទ និងមូលហេតុជាក់លាក់។',
  },
  {
    id: "booking-success",
    category: "Registration & Booking",
    question: "How do I know if my exam registration has been successful?",
    questionKm: "តើខ្ញុំដឹងដោយរបៀបណាថាការចុះឈ្មោះប្រឡងបានជោគជ័យ?",
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
      "បន្ទប់ពីចុះឈ្មោះប្រឡង សូមប្រាកដថាអ្នកបានចុចរក្សាទុកនូវកាលបរិច្ឆេទប្រឡង។ នៅពេលរក្សាទុករួចរាល់ អ្នកនឹងឃើញការកក់នៅលើ Examination Tap ហើយក្រុមកាងារ នឹងផ្ញើ Exam Identification Document ទៅកាន់តេលេក្រាមរបស់លោកអ្នក ១ ទៅ ២ថ្ងៃ មុនថ្ងៃប្រឡង។",
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
    ],
    answerEn:
      "Yes, you can request to change your exam date by contacting us via Telegram and completing the form with the following information:\n- Full name, Student ID, Subject, Phone number, specific reason, and relevant subjects.\n- Allowed requests: Change exam schedule.\n*(Note: Requests to change the exam schedule must be submitted at least one week before the exam date.)*",
    answerKm:
      "បាទ/ចាស អ្នកអាចស្នើសុំកែប្រែកាលបរិច្ឆេទប្រឡង ដោយទំនាក់ទំនងមកកាន់យើងខ្ញុំ និងបំពេញទម្រង់ស្នើសុំជាមួយព័ត៌មានដូចជា៖\n- ឈ្មោះពេញ, Student ID, មុខវិជ្ជា, លេខទូរស័ព្ទ, មូលហេតុ និងមុខវិជ្ជាពាក់ព័ន្ធ។\n- ការស្នើសុំដែលអនុញ្ញាត៖ ប្តូរកាលវិភាគប្រឡង។ ។\n*(ចំណាំ៖ ការស្នើសុំកែប្រែនេះ ត្រូវធ្វើឡើងមុនថ្ងៃប្រឡងមួយសប្តាហ៍)*",
  },

  // --- Category: Exam Sitting ---
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
    ],
    answerEn:
      "On exam day:\n1. Your Examination Identification Document has your timetable, seating arrangement, and center address.\n2. Bring your Exam Identification Document and Original National ID/Passport. These will be checked and verified upon entry.\n3. Make sure to arrive 30 minutes early and review the exam instruction detailed on the document.\nNeed help on location? Contact `017 493 140` (Telegram available).",
    answerKm:
      "នៅថ្ងៃប្រឡង៖\n១. ឯកសារសម្គាល់ខ្លួនសម្រាប់ប្រឡងរបស់លោកអ្នក មានបញ្ចូលនូវកាលវិភាគប្រឡង លេខតុ/លេខកៅអី និងអាសយដ្ឋានមណ្ឌលប្រឡង។\n២. សូមយកឯកសារសម្គាល់ខ្លួនសម្រាប់ប្រឡង និងអត្តសញ្ញាណប័ណ្ណច្បាប់ដើម ឬលិខិតឆ្លងដែនច្បាប់ដើមមកជាមួយ ដើម្បីពិនិត្យផ្ទៀងផ្ទាត់។\n៣. សូមប្រាកដថាអ្នកបានមកដល់មុនពេល ៣០ នាទី និងពិនិត្យមើលការណែនាំផ្សេងៗដែលមានចែងយ៉ាងលម្អិតនៅលើឯកសារ។**។\n\nព័ត៌មានទីតាំង សូមទាក់ទង `+855 17 493 140` (មាន Telegram)។",
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
    ],
    answerEn:
      "Full details of the rules and regulations will be sent along with the Examination Identification Document. Please familiarize yourself with these prior to attending the examination center.",
    answerKm:
      "ព័ត៌មានលម្អិតអំពីច្បាប់ និងបទប្បញ្ញត្តិ នឹងផ្ញើជូនជាមួយនឹង Examination Identification Document របស់អ្នក។ សូមអានស្វែងយល់មុនពេលចូលរួមការប្រឡង។",
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
      "No. Students are not allowed to change their exam entry on the day of the exam.",
    answerKm:
      "**មិនបានឡើយ។ សិស្សមិនត្រូវបានអនុញ្ញាតឱ្យផ្លាស់ប្តូរការចុះឈ្មោះរបស់ពួកគេនៅថ្ងៃប្រឡងនោះទេ។",
  },
  {
    id: "sitting-complaint",
    category: "Exam Sitting",
    question:
      ": If something happens at the exam center that affects my performance, can I make a complaint?",
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
    ],
    answerEn:
      "KICPAA makes every effort to ensure fair examination conditions. If you believe that the examination conditions have affected your performance, please inform KICPAA by emailing `education@kicpaa.org`",
    answerKm:
      "វ.គ.ស.ក. តែងតែខិតខំប្រឹងប្រែងឱ្យអស់ពីសមត្ថភាពដើម្បីធានាលក្ខខណ្ឌប្រឡងល្អបំផុត។ ប្រសិនបើលោកអ្នកមានអារម្មណ៍ថាលក្ខខណ្ឌប៉ះពាល់ដល់ការប្រឡង សូមជូនដំណឹងផ្ទាល់ទៅកាន់  `education@kicpaa.org`។",
  },

  // --- Category: Exam Result ---
  {
    id: "result-when",
    category: "Exam Result",
    question: "When is the result issued?",
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
      "The exam result will be available immediately after your submission.",
    answerKm:
      "លទ្ធផលប្រឡងនឹងមាន ភ្លាមៗបន្ទាប់ពីអ្នកចុចបញ្ជូន (Submission) រួចរាល់។",
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
    ],
    answerEn:
      "You can request an **Exam Result Review** by emailing `education@kicpaa.org` with your full name, student ID, subject name, and specific reasons for the appeal.",
    answerKm:
      "អ្នកអាចស្នើសុំការ **ពិនិត្យលទ្ធផលប្រឡងឡើងវិញ (Exam Result Review)** ដោយផ្ញើអ៊ីមែលទៅកាន់ `education@kicpaa.org` ដោយភ្ជាប់មកជាមួយឈ្មោះពេញ, Student ID, មុខវិជ្ជា និងមូលហេតុច្បាស់លាស់។",
  },

  // --- Category: Fees & Costs ---
  {
    id: "fees-costs",
    category: "Fees & Costs",
    question: "How much are the ATQ fees and exam fees?",
    questionKm: "តើតម្លៃសិក្សា និងថ្លៃប្រឡង ATQ មានតម្លៃប៉ុន្មាន?",
    keywords: [
      "fee",
      "fees",
      "cost",
      "price",
      "tuition",
      "how much",
      "how much does it cost",
      "amount",
      "pay",
      "payment",
      "application fee",
      "membership fee",
      "exam fee",
      "200000",
      "120000",
      "200k",
      "120k",
      "khr",
      "riels",
      "តម្លៃ",
      "ថ្លៃ",
      "ថ្លៃប្រឡង",
      "ថ្លៃពាក្យ",
      "តម្លៃប្រឡង",
      "បង់ប្រាក់",
      "ប៉ុន្មាន",
      "តម្លៃប៉ុន្មាន",
      "ថ្លៃសមាជិក",
      "តើតម្លៃសិក្សា និងថ្លៃប្រឡង atq មានតម្លៃប៉ុន្មាន",
    ],
    answerEn:
      "The official fees for the ATQ Program are:\n\n- 📝 **Application Fee**: `21,000 KHR` (One-time payment upon registration)\n- 🎓 **Annual Student Membership Fee**: `42,000 KHR` (Paid annually)\n- ✍️ **Examination Fee**: `63,000 KHR` (Per subject per exam)\n\n*(Note: Candidates must be an approved ATQ student member and have paid all due fees before registering for exams.)*",
    answerKm:
      "កម្រៃផ្លូវការសម្រាប់កម្មវិធី ATQ មានដូចខាងក្រោម៖\n\n- 📝 **ថ្លៃពាក្យសុំចុះឈ្មោះ**: `២១,០០០ រៀល` (បង់តែម្តងគត់)\n- 🎓 **ថ្លៃសមាជិកភាពសិស្សប្រចាំឆ្នាំ**: `៤២,០០០ រៀល` (បង់ជារៀងរាល់ឆ្នាំ)\n- ✍️ **ថ្លៃប្រឡង**: `៦៣,០០០ រៀល` (ក្នុងមួយមុខវិជ្ជា)\n\n*(ចំណាំ៖ បេក្ខជនត្រូវតែជាសមាជិកសិស្ស ATQ ដែលបានអនុម័ត និងបានទូទាត់ថ្លៃពាក់ព័ន្ធរួចរាល់ មុនពេលចុះឈ្មោះប្រឡង)*",
  },

  // --- Category: Curriculum & Subjects ---
  {
    id: "subjects-overview",
    category: "Curriculum & Subjects",
    question: "What are the 8 ATQ subjects and levels?",
    questionKm: "តើមុខវិជ្ជា ATQ ទាំង ៨ និងកម្រិតសិក្សាមានអ្វីខ្លះ?",
    keywords: [
      "8 subjects",
      "all subjects",
      "subjects",
      "courses",
      "modules",
      "what subjects",
      "levels",
      "tq1",
      "tq2",
      "tq3",
      "tq4",
      "tq5",
      "tq6",
      "tq7",
      "tq8",
      "principles level",
      "technician level",
      "syllabus",
      "curriculum",
      "មុខវិជ្ជា",
      "មុខវិជ្ជាទាំង ៨",
      "កម្រិតសិក្សា",
      "កម្រិតមូលដ្ឋាន",
      "កម្រិតបច្ចេកទេស",
      "តើមុខវិជ្ជា atq ទាំង ៨ និងកម្រិតសិក្សាមានអ្វីខ្លះ",
    ],
    answerEn:
      "The ATQ program consists of **8 subjects across 2 qualification levels**:\n\n**📘 Principles Level**:\n- **TQ1**: Bookkeeping, accounting and controls\n- **TQ2**: IT skills and software (QuickBooks, Excel, Word)\n- **TQ3**: Management information and data analysis\n- **TQ4**: Business environment\n\n**📙 Technician Level**:\n- **TQ5**: Financial statement preparation\n- **TQ6**: Management accounting\n- **TQ7**: Principles of Cambodian taxation\n- **TQ8**: Ethics and Cambodian business law",
    answerKm:
      "កម្មវិធី ATQ រួមមាន **៨ មុខវិជ្ជា ចែកចេញជា ២ កម្រិត**៖\n\n**📘 កម្រិតមូលដ្ឋាន (Principles Level)**៖\n- **TQ1**: ការកត់ត្រាបញ្ជី គណនេយ្យ និងការត្រួតពិនិត្យ\n- **TQ2**: ជំនាញបច្ចេកវិទ្យាព័ត៌មាន និងកម្មវិធីកុំព្យូទ័រ (QuickBooks, Excel, Word)\n- **TQ3**: ការគ្រប់គ្រងព័ត៌មាន និងការវិភាគទិន្នន័យ\n- **TQ4**: ការយល់ដឹងអំពីបរិយាកាសអាជីវកម្ម\n\n**📙 កម្រិតបច្ចេកទេស (Technician Level)**៖\n- **TQ5**: ការរៀបចំរបាយការណ៍ហិរញ្ញវត្ថុ\n- **TQ6**: គណនេយ្យគ្រប់គ្រង\n- **TQ7**: គោលការណ៍ពន្ធដារកម្ពុជា\n- **TQ8**: ក្រមសីលធម៌ និងច្បាប់អាជីវកម្មកម្ពុជា",
  },

  // --- Category: Grading & Pass Mark ---
  {
    id: "grading-passmark",
    category: "Grading & Pass Mark",
    question: "What is the passing score for ATQ exams?",
    questionKm: "តើពិន្ទុជាប់សម្រាប់ការប្រឡង ATQ គឺប៉ុន្មាន?",
    keywords: [
      "pass mark",
      "passing score",
      "pass score",
      "pass rate",
      "minimum score",
      "passing grade",
      "how to pass",
      "50%",
      "percentage to pass",
      "score to pass",
      "grade",
      "ពិន្ទុជាប់",
      "ពិន្ទុប្រឡងជាប់",
      "ប៉ុន្មានជាប់",
      "ពិន្ទុប៉ុន្មានជាប់",
      "ជាប់",
      "ពិន្ទុ",
      "៥០%",
      "តើពិន្ទុជាប់សម្រាប់ការប្រឡង atq គឺប៉ុន្មាន",
    ],
    answerEn:
      "The pass mark for all ATQ examination subjects is **50%**.\n- Your result displays immediately on screen upon submission as **Pass** or **Fail** with your overall percentage score.\n- There is no penalty deduction for incorrect choices.",
    answerKm:
      "ពិន្ទុជាប់សម្រាប់ការប្រឡងគ្រប់មុខវិជ្ជា ATQ គឺ **៥០%**។\n- លទ្ធផលនឹងបង្ហាញភ្លាមៗបន្ទាប់ពីចុចបញ្ជូន (Submission) នៅលើអេក្រង់កុំព្យូទ័រថា **ជាប់ (Pass)** ឬ **ធ្លាក់ (Fail)** ព្រមទាំងពិន្ទុភាគរយជាក់ស្តែង។\n- មិនមានការកាត់ពិន្ទុសម្រាប់ការឆ្លើយខុសនោះទេ។",
  },

  // --- Category: Exam Format & Duration ---
  {
    id: "exam-format-duration",
    category: "Exam Format",
    question: "What is the format and duration of the ATQ exam?",
    questionKm: "តើទម្រង់ និងរយៈពេលនៃការប្រឡង ATQ មានលក្ខណៈដូចម្តេច?",
    keywords: [
      "format",
      "duration",
      "how long",
      "time limit",
      "exam length",
      "hours",
      "2 hours",
      "computer based",
      "cbe",
      "multiple choice",
      "questions format",
      "ទម្រង់",
      "រយៈពេល",
      "ប៉ុន្មានម៉ោង",
      "ម៉ោងប្រឡង",
      "ទម្រង់ប្រឡង",
      "ប្រឡងលើកុំព្យូទ័រ",
      "រយៈពេលប្រឡង",
      "តើទម្រង់ និងរយៈពេលនៃការប្រឡង atq មានលក្ខណៈដូចម្តេច",
    ],
    answerEn:
      "**ATQ Examination Format & Duration**:\n- 💻 **Exam Method**: Computer-Based Examination (CBE) taken in person at KICPAA Center.\n- ⏱️ **Duration**: **2 hours** (120 minutes) per subject.\n- 📋 **Question Types**: Multiple-choice questions, objective test items, scenario analysis, and practical data entries.\n- 🌐 **Language**: English with bilingual clarifications for Cambodian context where applicable.",
    answerKm:
      "**ទម្រង់ និងរយៈពេលនៃការប្រឡង ATQ**៖\n- 💻 **របៀបប្រឡង**៖ ប្រឡងលើប្រព័ន្ធកុំព្យូទ័រ (Computer-Based Exam - CBE) ដោយផ្ទាល់នៅមណ្ឌលប្រឡង វ.គ.ស.ក.។\n- ⏱️ **រយៈពេល**៖ **២ ម៉ោង** (១២០ នាទី) ក្នុងមួយមុខវិជ្ជា។\n- 📋 **ប្រភេទសំណួរ**៖ សំណួរពហុជ្រើសរើស (Multiple-choice), សំណួរផ្អែកលើករណីសិក្សា និងការបញ្ចូលទិន្នន័យជាក់ស្តែង។\n- 🌐 **ភាសា**៖ ភាសាអង់គ្លេស ជាមួយនឹងការពន្យល់គាំទ្រជាភាសាខ្មែរសម្រាប់បរិបទកម្ពុជា។",
  },

  // --- Category: Admission & Eligibility ---
  {
    id: "admission-requirements",
    category: "Admission & Eligibility",
    question: "Who is eligible to apply for the ATQ program?",
    questionKm: "តើនរណាខ្លះដែលមានសិទ្ធិចុះឈ្មោះចូលរៀនកម្មវិធី ATQ?",
    keywords: [
      "eligible",
      "eligibility",
      "who can apply",
      "who can study",
      "requirements",
      "admission",
      "qualification to join",
      "criteria",
      "apply",
      "enroll",
      "enrollment",
      "high school",
      "university",
      "តម្រូវការ",
      "អ្នកណាខ្លះអាចរៀនបាន",
      "លក្ខខណ្ឌ",
      "ចុះឈ្មោះចូលរៀន",
      "សិទ្ធិចុះឈ្មោះ",
      "និស្សិត",
      "បាក់ឌុប",
      "តើនរណាខ្លះដែលមានសិទ្ធិចុះឈ្មោះចូលរៀនកម្មវិធី atq",
    ],
    answerEn:
      "The ATQ program is designed for:\n1. 🎓 **University Students**: Enrolled in accounting, finance, banking, business, or economics.\n2. 🏫 **High School Graduates (Bac II)**: Seeking an accredited fast-track entry into the accounting profession.\n3. 💼 **Professionals & Civil Servants**: Working in finance, accounting, or audit roles seeking national professional recognition.\n\nTo enroll, visit the **Learning Hub** to submit your student application.",
    answerKm:
      "កម្មវិធី ATQ បើកទូលាយសម្រាប់បេក្ខជនជាច្រើនរួមមាន៖\n១. 🎓 **និស្សិតសាកលវិទ្យាល័យ**៖ កំពុងសិក្សាជំនាញគណនេយ្យ ហិរញ្ញវត្ថុ ធនាគារ គ្រប់គ្រង ឬសេដ្ឋកិច្ច។\n២. 🏫 **សិស្សបញ្ចប់ថ្នាក់វិទ្យាល័យ (បាក់ឌុប)**៖ ដែលចង់ទទួលបានវិជ្ជាជីវៈគណនេយ្យស្តង់ដារជាតិដោយឆាប់រហ័ស។\n៣. 💼 **បុគ្គលិក មន្ត្រីរាជការ និងអ្នកអនុវត្តការងារ**៖ ក្នុងវិស័យគណនេយ្យ ហិរញ្ញវត្ថុ ឬសវនកម្ម ដែលចង់បានវិញ្ញាបនបត្រវិជ្ជាជីវៈស្របច្បាប់។\n\nដើម្បីចុះឈ្មោះ សូមចូលទៅកាន់ **Learning Hub** ដើម្បីដាក់ពាក្យស្នើសុំ។",
  },

  // --- Category: Internships ---
  {
    id: "internship-opportunities",
    category: "Internships",
    question: "Are there internship opportunities for ATQ students?",
    questionKm: "តើមានឱកាសកម្មសិក្សា (Internship) សម្រាប់សិស្ស ATQ ដែរឬទេ?",
    keywords: [
      "internship",
      "internships",
      "job",
      "career",
      "partner firms",
      "practical training",
      "work experience",
      "bdo",
      "grant thornton",
      "ecovis",
      "hlb",
      "employers",
      "កម្មសិក្សា",
      "ការងារ",
      "ឱកាសការងារ",
      "ក្រុមហ៊ុនដៃគូ",
      "ចុះកម្មសិក្សា",
      "តើមានឱកាសកម្មសិក្សាសម្រាប់សិស្ស atq ដែរឬទេ",
    ],
    answerEn:
      "**Yes!** KICPAA collaborates with recognized accounting firms, audit practices, and corporations across Cambodia (such as **BDO, Grant Thornton, HLB, ECOVIS, Morison, CamEd**, and leading universities).\n- Active ATQ student members receive direct support and recommendations for **practical internship placements** and entry-level accounting positions.",
    answerKm:
      "**បាទ/ចាស មាន!** វ.គ.ស.ក. មានកិច្ចសហការជាមួយក្រុមហ៊ុនគណនេយ្យ សវនកម្ម និងស្ថាប័នដៃគូនានាក្នុងប្រទេសកម្ពុជា (ដូចជា **BDO, Grant Thornton, HLB, ECOVIS, Morison, CamEd** និងគ្រឹះស្ថានឧត្តមសិក្សាជាច្រើន)។\n- សមាជិកសិស្ស ATQ នឹងទទួលបានការគាំទ្រ និងការណែនាំសម្រាប់ការ **ចុះកម្មសិក្សា (Internships)** និងឱកាសការងារគណនេយ្យជាក់ស្តែង។",
  },

  // --- Category: Study Materials ---
  {
    id: "study-materials",
    category: "Study Materials",
    question: "Where can I get ATQ study materials and textbooks?",
    questionKm: "តើខ្ញុំអាចទទួលបានសៀវភៅ និងឯកសារសិក្សា ATQ នៅឯណា?",
    keywords: [
      "textbook",
      "textbooks",
      "books",
      "study materials",
      "materials",
      "reading",
      "learning hub",
      "curriculum book",
      "syllabus book",
      "download",
      "resources",
      "mock exam",
      "សៀវភៅ",
      "ឯកសារ",
      "សៀវភៅសិក្សា",
      "មេរៀន",
      "ឯកសារសិក្សា",
      "ទាញយកសៀវភៅ",
      "តើខ្ញុំអាចទទួលបានសៀវភៅ និងឯកសារសិក្សា atq នៅឯណា",
    ],
    answerEn:
      "ATQ study resources and learning guides are available through two channels:\n1. 💻 **Digital Resources**: Syllabi, chapter overviews, and test preparation materials can be accessed on the **Learning Hub**.\n2. 📚 **Physical Textbooks**: Official printed study books for TQ1 through TQ8 can be purchased directly at the **KICPAA office**.",
    answerKm:
      "ឯកសារ និងសៀវភៅសិក្សា ATQ អាចទទួលបានតាម ២ ផ្លូវ៖\n១. 💻 **ឯកសារឌីជីថល**៖ កម្មវិធីសិក្សាលម្អិត សេចក្តីសង្ខេបមេរៀន និងគំរូសំណួរប្រឡង អាចចូលមើលបាននៅលើ **Learning Hub**។\n២. 📚 **សៀវភៅពុម្ពផ្លូវការ**៖ សៀវភៅសិក្សាផ្លូវការសម្រាប់មុខវិជ្ជា TQ1 ដល់ TQ8 អាចរកជាវបានដោយផ្ទាល់នៅ **ការិយាល័យ វ.គ.ស.ក.**។",
  },

  // --- Category: Certificate & Career ---
  {
    id: "qualification-certificate",
    category: "Certificate & Career",
    question: "What certificate do I receive upon completing the ATQ?",
    questionKm: "តើខ្ញុំនឹងទទួលបានវិញ្ញាបនបត្រអ្វីខ្លះនៅពេលបញ្ចប់កម្មវិធី ATQ?",
    keywords: [
      "certificate",
      "diploma",
      "qualification",
      "accreditation",
      "finish",
      "complete",
      "graduation",
      "cpa pathway",
      "recognized",
      "recognition",
      "វិញ្ញាបនបត្រ",
      "សញ្ញាបត្រ",
      "បញ្ចប់ការសិក្សា",
      "ការទទួលស្គាល់",
      "វិញ្ញាបនបត្រ atq",
      "តើខ្ញុំនឹងទទួលបានវិញ្ញាបនបត្រអ្វីខ្លះនៅពេលបញ្ចប់កម្មវិធី atq",
    ],
    answerEn:
      "Upon passing all required subjects:\n- 📜 Candidates are awarded the **Accounting Technician Qualification (ATQ)** certificate accredited by KICPAA under Cambodian regulations.\n- 🚀 The ATQ certificate validates your professional capability to perform accounting, tax, and reporting roles, and serves as a solid foundation toward the **Certified Public Accountant (CPA)** qualification.",
    answerKm:
      "នៅពេលប្រឡងជាប់មុខវិជ្ជាកំណត់ទាំងអស់៖\n- 📜 បេក្ខជននឹងទទួលបានវិញ្ញាបនបត្រ **អ្នកបច្ចេកទេសគណនេយ្យ (Accounting Technician Qualification - ATQ)** ដែលចេញជាផ្លូវការដោយ វ.គ.ស.ក.។\n- 🚀 វិញ្ញាបនបត្រនេះបញ្ជាក់ពីសមត្ថភាពវិជ្ជាជីវៈក្នុងការបំពេញការងារគណនេយ្យ ពន្ធដារ និងរបាយការណ៍ហិរញ្ញវត្ថុ ព្រមទាំងជាមូលដ្ឋានគ្រឹះដ៏រឹងមាំដើម្បីបន្តទៅកាន់សញ្ញាបត្រ **គណនេយ្យករជំនាញ (CPA)**។",
  },

  // --- Category: Contact ---
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
      "**KICPAA ATQ Support Contacts**:\n- ✉️ **Email**: `Education@kicpaa.org` / `ATQ@kicpaa.org`\n- 📞 **Phone / Telegram**: `+855 17 493 140`\n- 🏢 **Office**: Monday – Friday (8:00 AM – 5:00 PM)\n- 🌐 **Platform**: KICPAA Learning Hub",
    answerKm:
      "**ព័ត៌មានទំនាក់ទំនង KICPAA ATQ**៖\n- ✉️ **អ៊ីមែល**: `Education@kicpaa.org` / `ATQ@kicpaa.org`\n- 📞 **ទូរស័ព្ទ / Telegram**: `+855 17 493 140`\n- 🏢 **ការិយាល័យ**: ថ្ងៃចន្ទ – សុក្រ (៨:០០ ព្រឹក – ៥:០០ ល្ងាច)\n- 🌐 **ប្រព័ន្ធ**: KICPAA Learning Hub",
  },
];

// Helper: Normalizes text for case, unicode, and punctuation
const normalizeChatText = (value = "") =>
  value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[\p{P}\p{S}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

// Direct mapping of clickable suggestion pills and quick-prompts to their target FAQ items
const suggestionTargetMap = {};

// Register all FAQs programmatically into the target map for 100% click resolution
faqKnowledgeBase.forEach((item) => {
  if (item.question) {
    suggestionTargetMap[normalizeChatText(item.question)] = item.id;
  }
  if (item.questionKm) {
    suggestionTargetMap[normalizeChatText(item.questionKm)] = item.id;
  }
  if (Array.isArray(item.keywords)) {
    item.keywords.forEach((kw) => {
      suggestionTargetMap[normalizeChatText(kw)] = item.id;
    });
  }
});

// Alias variations to guarantee 100% precision for common short prompts
const promptAliases = {
  "when can i take exams": "session-when",
  "exam session dates": "session-when",
  "what subjects will be available": "session-available",
  "what subjects will be available at each month": "session-available",
  "can i take exams in any order": "booking-order",
  "can i take the atq qualification exams in any order": "booking-order",
  "when are booking deadlines": "booking-deadlines",
  "what are booking deadlines": "booking-deadlines",
  "when is the registration deadline": "booking-deadlines",
  "how many exams can i take per session": "booking-max-exams",
  "how many exams can i take at each exam session": "booking-max-exams",
  "how many exams can i take": "booking-max-exams",
  "what if i fail an exam": "booking-fail-resit",
  "if i fail can i resit": "booking-fail-resit",
  "can i still sit if i miss deadline": "booking-late",
  "can i do late booking": "booking-late",
  "how do i know booking is successful": "booking-success",
  "where can i take my exams": "booking-location",
  "where can i take exams": "booking-location",
  "how can i enter for exams": "booking-how-to-enter",
  "how to register for exams": "booking-how-to-enter",
  "can i change my booking": "booking-change",
  "what happens on exam day": "sitting-exam-day",
  "what documents are required": "sitting-exam-day",
  "where can i find exam rules": "sitting-rules",
  "can i change entry on exam day": "sitting-same-day-change",
  "exam complaints": "sitting-complaint",
  "when are results issued": "result-when",
  "what if results are incorrect": "result-incorrect",
  "how much are the atq fees": "fees-costs",
  "how much is exam fee": "fees-costs",
  "what are the 8 subjects": "subjects-overview",
  "what is the passing score": "grading-passmark",
  "exam format and duration": "exam-format-duration",
  "who can apply for atq": "admission-requirements",
  "internship opportunities": "internship-opportunities",
  "study materials and textbooks": "study-materials",
  "what certificate do i receive": "qualification-certificate",
  "contact kicpaa support": "contact-support",
  // Khmer aliases
  "តើប្រឡងនៅពេលណា": "session-when",
  "កាលវិភាគប្រឡង": "session-when",
  "តើមានមុខវិជ្ជាអ្វីខ្លះ": "session-available",
  "តើអាចប្រឡងតាមលំដាប់ណា": "booking-order",
  "តើប្រឡងបានប៉ុន្មានមុខក្នុង១សម័យ": "booking-max-exams",
  "ចំនួនមុខវិជ្ជាប្រឡង": "booking-max-exams",
  "បើធ្លាក់តើអាចប្រឡងសងពេលណា": "booking-fail-resit",
  "បើហួសកាលកំណត់តើអាចប្រឡងបានទេ": "booking-late",
  "ដឹងថាកក់បានជោគជ័យដោយរបៀបណា": "booking-success",
  "ទីតាំងប្រឡងនៅឯណា": "booking-location",
  "តើត្រូវចុះឈ្មោះប្រឡងយ៉ាងដូចម្តេច": "booking-how-to-enter",
  "តើអាចផ្លាស់ប្តូរការកក់បានទេ": "booking-change",
  "តើមានអ្វីកើតឡើងនៅថ្ងៃប្រឡង": "sitting-exam-day",
  "តើខ្ញុំត្រូវយកឯកសារអ្វីខ្លះទៅថ្ងៃប្រឡង": "sitting-exam-day",
  "តើអាចប្តូរនៅថ្ងៃប្រឡងបានទេ": "sitting-same-day-change",
  "លទ្ធផលចេញពេលណា": "result-when",
  "តម្លៃប្រឡងប៉ុន្មាន": "fees-costs",
  "មុខវិជ្ជាទាំង ៨": "subjects-overview",
  "ពិន្ទុជាប់ប៉ុន្មាន": "grading-passmark",
  "ទម្រង់ប្រឡង": "exam-format-duration",
  "អ្នកណាខ្លះអាចរៀនបាន": "admission-requirements",
  "ឱកាសការងារ": "internship-opportunities",
  "សៀវភៅសិក្សា": "study-materials",
  "វិញ្ញាបនបត្រ atq": "qualification-certificate",
};

Object.entries(promptAliases).forEach(([alias, id]) => {
  suggestionTargetMap[normalizeChatText(alias)] = id;
});

/**
 * Smart Random Suggestions Generator
 * Generates dynamic, diverse suggestion questions picked across knowledge base categories.
 * Excludes the currently answered question, and ensures cross-category variety.
 */
const getRandomSuggestions = (excludeId = null, lang = "en", count = 3) => {
  const isKm = lang === "km";
  const pool = faqKnowledgeBase.filter((item) => item.id !== excludeId);
  if (pool.length <= count) {
    return pool.map((item) => (isKm ? item.questionKm : item.question));
  }

  // Group by category to ensure cross-category representation
  const categoryMap = new Map();
  pool.forEach((item) => {
    const cat = item.category || "General";
    if (!categoryMap.has(cat)) categoryMap.set(cat, []);
    categoryMap.get(cat).push(item);
  });

  const selected = [];
  const selectedIds = new Set();

  // If excludeId was provided, pick 1 question from the same category first (related question)
  if (excludeId) {
    const currentItem = faqKnowledgeBase.find((i) => i.id === excludeId);
    if (currentItem && categoryMap.has(currentItem.category)) {
      const sameCatItems = categoryMap
        .get(currentItem.category)
        .filter((item) => item.id !== excludeId);
      if (sameCatItems.length > 0) {
        const picked =
          sameCatItems[Math.floor(Math.random() * sameCatItems.length)];
        selected.push(picked);
        selectedIds.add(picked.id);
      }
    }
  }

  // Shuffle all categories
  const categories = Array.from(categoryMap.keys()).sort(
    () => 0.5 - Math.random(),
  );

  // Pick 1 question from each distinct category until we reach count
  for (const cat of categories) {
    if (selected.length >= count) break;
    const catItems = categoryMap
      .get(cat)
      .filter((item) => !selectedIds.has(item.id));
    if (catItems.length > 0) {
      const pick = catItems[Math.floor(Math.random() * catItems.length)];
      selected.push(pick);
      selectedIds.add(pick.id);
    }
  }

  // If still need more, fill randomly from remaining candidates
  if (selected.length < count) {
    const remaining = pool
      .filter((item) => !selectedIds.has(item.id))
      .sort(() => 0.5 - Math.random());
    for (const item of remaining) {
      if (selected.length >= count) break;
      selected.push(item);
      selectedIds.add(item.id);
    }
  }

  // Shuffle selected items so the related one isn't always in position 0
  const shuffled = selected.sort(() => 0.5 - Math.random());

  return shuffled.map((item) => (isKm ? item.questionKm : item.question));
};

const ignoredEnglishTokens = new Set([
  "a", "an", "the", "is", "are", "am", "was", "were", "be", "been",
  "i", "me", "my", "we", "our", "you", "your", "it", "this", "that",
  "to", "for", "of", "on", "in", "at", "by", "with", "and", "or",
  "can", "could", "would", "should", "do", "does", "did", "how", "what",
  "when", "where", "who", "which", "why", "please", "tell", "about",
]);

// Broad topic prompts let users browse the FAQ knowledge base by the topics
// shown in the chat welcome message (for example, "booking" or "results").
const topicPromptAliases = {
  exam: ["Exam Session", "Exam Sitting", "Exam Format"],
  booking: ["Registration & Booking"],
  register: ["Registration & Booking"],
  registration: ["Registration & Booking"],
  result: ["Exam Result"],
  results: ["Exam Result"],
  fee: ["Fees & Costs"],
  fees: ["Fees & Costs"],
  subject: ["Curriculum & Subjects"],
  subjects: ["Curriculum & Subjects"],
  schedule: ["Exam Session"],
  deadline: ["Registration & Booking"],
  deadlines: ["Registration & Booking"],
  cost: ["Fees & Costs"],
  pass: ["Grading & Pass Mark"],
  duration: ["Exam Format"],
};

// Intelligent Query Matcher with Natural Language understanding for English & Khmer
function findBestAnswer(rawQuery, lang = "en") {
  const query = normalizeChatText(rawQuery);
  const isKm = lang === "km";

  // 1. Check for Greetings
  const greetings = [
    "hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening", "sup",
    "សួស្តី", "ជំរាបសួរ", "សួស្ដី",
  ];
  if (greetings.some((g) => query === g || query.startsWith(g + " "))) {
    return {
      text: isKm
        ? "សួស្តី! 👋 ខ្ញុំជា **ATQ Assistant** ជំនួយការឆ្លាតវៃរបស់ KICPAA។ តើខ្ញុំអាចជួយអ្វីដល់អ្នកថ្ងៃនេះ? អ្នកអាចសួរអំពីកាលវិភាគប្រឡង ការចុះឈ្មោះ តម្លៃសិក្សា មុខវិជ្ជា ឬលទ្ធផលប្រឡងបាន!"
        : "Hello! 👋 I'm your **KICPAA ATQ Assistant**. How can I help you today? You can ask me about exam sessions, booking procedures, fees, the 8 subjects, exam rules, or results!",
      suggestions: getRandomSuggestions(null, lang, 4),
    };
  }

  // 2. Check for Gratitude / Thanks
  const thanksWords = [
    "thanks", "thank you", "thx", "thank", "appreciate", "ok thanks", "okay thanks",
    "អរគុណ", "អរគុណច្រើន", "សូមអរគុណ",
  ];
  if (thanksWords.some((w) => query === w || query.startsWith(w + " "))) {
    return {
      text: isKm
        ? "មិនអីទេ ដោយក្តីរីករាយ! 😊 ប្រសិនបើអ្នកមានចម្ងល់បន្ថែមអំពីកម្មវិធី ATQ សូមសួរខ្ញុំបានគ្រប់ពេល។"
        : "You're very welcome! 😊 Feel free to ask if you have any more questions about the KICPAA ATQ Program.",
      suggestions: getRandomSuggestions(null, lang, 4),
    };
  }

  // 3. Direct Suggestion Mapping & Keyword Map Lookup
  const targetFaqId = suggestionTargetMap[query];
  if (targetFaqId) {
    const targetItem = faqKnowledgeBase.find((item) => item.id === targetFaqId);
    if (targetItem) {
      return {
        text: isKm ? targetItem.answerKm : targetItem.answerEn,
        suggestions: getRandomSuggestions(targetItem.id, lang, 3),
      };
    }
  }

  // 4. Exact Question or Keyword Match
  const exactItem = faqKnowledgeBase.find(
    (item) =>
      normalizeChatText(item.question) === query ||
      normalizeChatText(item.questionKm) === query ||
      item.keywords.some((kw) => normalizeChatText(kw) === query),
  );
  if (exactItem) {
    return {
      text: isKm ? exactItem.answerKm : exactItem.answerEn,
      suggestions: getRandomSuggestions(exactItem.id, lang, 3),
    };
  }

  // 4a. Browse by a broad topic prompt. Keep this exact so words like
  // "exam" inside a full question still go through normal FAQ matching.
  const topic = query.replace(/^(about|info|information on|tell me about) /, "");
  const topicCategories = topicPromptAliases[topic];
  if (topicCategories) {
    const topicItems = faqKnowledgeBase.filter((item) =>
      topicCategories.includes(item.category),
    );
    const topicName = topic.charAt(0).toUpperCase() + topic.slice(1);
    const topicSuggestions = topicItems
      .slice(0, 4)
      .map((item) => (isKm ? item.questionKm : item.question));
    return {
      text: isKm
        ? `សូមជ្រើសរើសសំណួរអំពី ${topicName}៖`
        : `Here are some questions about ${topicName}. Choose one to see the answer:`,
      suggestions: topicSuggestions.length
        ? topicSuggestions
        : getRandomSuggestions(null, lang, 4),
    };
  }

  // 5. Direct Contact Request
  const contactTriggers = [
    "contact", "agent", "human", "support", "email", "phone", "telegram", "call", "helpdesk",
    "ទាក់ទង", "ភ្នាក់ងារ", "លេខទូរស័ព្ទ", "តេលេក្រាម", "ទំនាក់ទំនង",
  ];
  const hasOtherTopic =
    /\b(exam|booking|register|result|fee|subject|schedule|deadline|cost|pass|duration)\b/i.test(
      query,
    );
  if (
    !hasOtherTopic &&
    contactTriggers.some((t) => query.includes(normalizeChatText(t)))
  ) {
    const contactItem = faqKnowledgeBase.find(
      (i) => i.id === "contact-support",
    );
    return {
      text: isKm ? contactItem.answerKm : contactItem.answerEn,
      suggestions: getRandomSuggestions("contact-support", lang, 3),
    };
  }

  // 6. Intelligent Scoring Engine (Bilingual NLP)
  const queryTokens = [
    ...new Set(
      query
        .split(/\s+/)
        .filter((token) => token.length > 1 && !ignoredEnglishTokens.has(token)),
    ),
  ];

  let bestItem = null;
  let highestScore = 0;
  let secondHighestScore = 0;

  faqKnowledgeBase.forEach((item) => {
    let score = 0;
    const questionEn = normalizeChatText(item.question);
    const questionKm = normalizeChatText(item.questionKm);

    // Exact or substring match in questions
    if (query === questionEn || query === questionKm) {
      score += 100;
    } else if (
      (questionEn && (questionEn.includes(query) || query.includes(questionEn))) ||
      (questionKm && (questionKm.includes(query) || query.includes(questionKm)))
    ) {
      score += 35;
    }

    // Substring match of individual normalized keywords in query
    const normalizedKeywords = item.keywords.map(normalizeChatText);
    normalizedKeywords.forEach((kw) => {
      if (!kw) return;
      if (query === kw) {
        score += 30;
      } else if (query.includes(kw)) {
        score += 12 + kw.split(" ").length * 3;
      } else if (kw.length > 4 && kw.includes(query)) {
        score += 10;
      }
    });

    // Token-level scoring
    queryTokens.forEach((token) => {
      if (questionEn.includes(token) || questionKm.includes(token)) {
        score += 5;
      }
      if (normalizedKeywords.some((kw) => kw.includes(token))) {
        score += 6;
      }
    });

    // Domain-specific smart intent boosts
    if (
      item.id === "fees-costs" &&
      (query.includes("fee") ||
        query.includes("cost") ||
        query.includes("price") ||
        query.includes("pay") ||
        query.includes("តម្លៃ") ||
        query.includes("ថ្លៃ") ||
        query.includes("បង់"))
    ) {
      score += 25;
    }
    if (
      item.id === "subjects-overview" &&
      (query.includes("subject") ||
        query.includes("course") ||
        query.includes("module") ||
        query.includes("tq") ||
        query.includes("មុខវិជ្ជា") ||
        query.includes("៨ មុខ"))
    ) {
      score += 20;
    }
    if (
      item.id === "grading-passmark" &&
      (query.includes("pass") ||
        query.includes("score") ||
        query.includes("mark") ||
        query.includes("grade") ||
        query.includes("ជាប់") ||
        query.includes("ធ្លាក់") ||
        query.includes("៥០"))
    ) {
      score += 25;
    }
    if (
      item.id === "exam-format-duration" &&
      (query.includes("format") ||
        query.includes("duration") ||
        query.includes("hour") ||
        query.includes("time") ||
        query.includes("cbe") ||
        query.includes("computer") ||
        query.includes("រយៈពេល") ||
        query.includes("ទម្រង់"))
    ) {
      score += 25;
    }
    if (
      item.id === "internship-opportunities" &&
      (query.includes("intern") ||
        query.includes("partner") ||
        query.includes("job") ||
        query.includes("work") ||
        query.includes("កម្មសិក្សា") ||
        query.includes("ការងារ"))
    ) {
      score += 30;
    }
    if (
      item.id === "study-materials" &&
      (query.includes("book") ||
        query.includes("material") ||
        query.includes("textbook") ||
        query.includes("reading") ||
        query.includes("សៀវភៅ") ||
        query.includes("ឯកសារ"))
    ) {
      score += 30;
    }
    if (
      item.id === "qualification-certificate" &&
      (query.includes("certificate") ||
        query.includes("diploma") ||
        query.includes("cpa") ||
        query.includes("graduate") ||
        query.includes("វិញ្ញាបនបត្រ") ||
        query.includes("សញ្ញាបត្រ"))
    ) {
      score += 30;
    }
    if (
      item.id === "admission-requirements" &&
      (query.includes("who can") ||
        query.includes("eligib") ||
        query.includes("require") ||
        query.includes("criteria") ||
        query.includes("តម្រូវការ") ||
        query.includes("នរណា"))
    ) {
      score += 25;
    }

    if (score > highestScore) {
      secondHighestScore = highestScore;
      highestScore = score;
      bestItem = item;
    } else if (score > secondHighestScore) {
      secondHighestScore = score;
    }
  });

  const hasConfidentMatch = highestScore >= 12;

  if (hasConfidentMatch && bestItem) {
    return {
      text: isKm ? bestItem.answerKm : bestItem.answerEn,
      suggestions: getRandomSuggestions(bestItem.id, lang, 3),
    };
  }

  // 7. Fallback when no match is found
  return {
    text: isKm
      ? "ខ្ញុំមិនបានរកឃើញចម្លើយជាក់លាក់សម្រាប់សំណួរនេះទេ។ ប៉ុន្តែអ្នកអាចជ្រើសរើសប្រធានបទពេញនិយមខាងក្រោម ឬទាក់ទងផ្ទាល់មកកាន់ក្រុមការងារ KICPAA តាមរយៈ **Education@kicpaa.org** ឬទូរស័ព្ទ **+855 17 493 140** (Telegram)។"
      : "I couldn't find an exact answer to that specific question. However, here are some popular topics, or you can contact our education team directly at **Education@kicpaa.org** or **+855 17 493 140** (Telegram available).",
    suggestions: getRandomSuggestions(null, lang, 4),
  };
}

const AIBeta = ({
  isOpen: controlledIsOpen,
  setIsOpen: controlledSetIsOpen,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = controlledSetIsOpen || setInternalIsOpen;

  const { language: siteLanguage } = useLanguage();
  const [userSelectedLanguage, setUserSelectedLanguage] = useState(null);
  const language =
    userSelectedLanguage || (siteLanguage === "km" ? "km" : "bilingual");
  const setLanguage = setUserSelectedLanguage;

  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initial welcome message with dynamic random suggestions
  const [messages, setMessages] = useState(() => {
    const isKm = siteLanguage === "km";
    return [
      {
        id: "welcome-main",
        sender: "bot",
        isWelcome: true,
        text: `Hi there / សួស្តី! 👋\nHello! I'm your KICPAA ATQ Beta. How can I help you today? You can ask me about exam sessions, booking procedures, fees, the 8 subjects, exam rules, or results!\n\nសួស្តី! ខ្ញុំជា ATQ Assistant ជំនួយការរបស់ KICPAA។ តើខ្ញុំអាចជួយអ្វីដល់អ្នកថ្ងៃនេះ? អ្នកអាចសួរអំពីកាលវិភាគប្រឡង ការចុះឈ្មោះ តម្លៃ មុខវិជ្ជា ឬលទ្ធផលប្រឡងបាន!`,
        suggestions: getRandomSuggestions(null, isKm ? "km" : "en", 4),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ];
  });

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
            text: "សូមស្វាគមន៍មកកាន់ **ភាសាខ្មែរ**! 🇰🇭\nតើអ្នកចង់សាកសួរអំពីអ្វីដែរទាក់ទងនឹងកម្មវិធីប្រឡង ATQ? សូមជ្រើសរើសប្រធានបទខាងក្រោម ឬវាយសំណួររបស់អ្នក៖",
            suggestions: getRandomSuggestions(null, "km", 4),
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
            suggestions: getRandomSuggestions(null, "en", 4),
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
      const isKm = language === "km";
      setMessages((prev) => [
        ...prev,
        {
          id: `agent-${Date.now()}`,
          sender: "bot",
          text: isKm
            ? `🧑‍💼 **ការទាក់ទងជាមួយក្រុមការងារ KICPAA ATQ**\n\nមន្ត្រីអប់រំរបស់យើងត្រៀមខ្លួនជាស្រេចដើម្បីជួយអ្នកដោយផ្ទាល់៖\n\n- 📱 **Telegram / ទូរស័ព្ទ**: [+855 17 493 140](tel:+85517493140)\n- ✉️ **អ៊ីមែល**: [Education@kicpaa.org](mailto:Education@kicpaa.org) / [ATQ@kicpaa.org](mailto:ATQ@kicpaa.org)\n- 🏢 **ម៉ោងធ្វើការ**: ថ្ងៃចន្ទ – សុក្រ (៨:០០ ព្រឹក – ៥:០០ ល្ងាច)`
            : `🧑‍💼 **Connecting with KICPAA ATQ Team**\n\nOur education officers are ready to assist you directly:\n\n- 📱 **Telegram / Phone**: [+855 17 493 140](tel:+85517493140)\n- ✉️ **Email**: [Education@kicpaa.org](mailto:Education@kicpaa.org) / [ATQ@kicpaa.org](mailto:ATQ@kicpaa.org)\n- 🏢 **Office Hours**: Monday – Friday (8:00 AM – 5:00 PM)`,
          isAgentContact: true,
          suggestions: getRandomSuggestions(
            "contact-support",
            isKm ? "km" : "en",
            3,
          ),
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
        const activeLang =
          language === "km" || (language === "bilingual" && containsKhmer)
            ? "km"
            : "en";
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
    const isKm = siteLanguage === "km";
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        isWelcome: true,
        text: `Hi there / សួស្តី! 👋\nHello! I'm your KICPAA ATQ Assistant. How can I help you today? You can ask me about exam sessions, booking procedures, fees, the 8 subjects, exam rules, or results!\n\nសួស្តី! ខ្ញុំជា ATQ Assistant ជំនួយការរបស់ KICPAA។ តើខ្ញុំអាចជួយអ្វីដល់អ្នកថ្ងៃនេះ? អ្នកអាចសួរអំពីកាលវិភាគប្រឡង ការចុះឈ្មោះ តម្លៃ មុខវិជ្ជា ឬលទ្ធផលប្រឡងបាន!`,
        suggestions: getRandomSuggestions(null, isKm ? "km" : "en", 4),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setLanguage("bilingual");
  };

  // Format text renderer for Markdown links and bold text
  const renderFormattedText = (text) => {
    return text.split("\n").map((line, idx) => {
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      formattedLine = formattedLine.replace(
        /Learning Hub/g,
        '<a href="https://education.kicpaa.org/student/login" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold hover:text-blue-800">Learning Hub</a>',
      );
      formattedLine = formattedLine.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold hover:text-blue-800">$1</a>',
      );
      formattedLine = formattedLine.replace(
        /`([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})`/g,
        '<a href="mailto:$1" class="text-sky-600 underline font-medium hover:text-sky-800">$1</a>',
      );
      formattedLine = formattedLine.replace(
        /`([^`]+)`/g,
        '<code class="bg-slate-200/60 px-1 py-0.5 rounded text-xs dark:bg-slate-700/60">$1</code>',
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
                    KICPAA FAQ
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
              <span className="text-[11px] font-medium text-slate-400 tracking-wide dark:text-slate-500">
                {language === "km"
                  ? "ជំនួយការ KICPAA ATQ ឆ្លាតវៃ"
                  : "Smart KICPAA ATQ Assistant"}
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
                      : "rounded-2xl rounded-tl-xs bg-[#f2f4f8] px-4 py-3 text-slate-800 border border-slate-200/50 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
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

                {/* Suggestions Pills attached to bot message (Random & Category-Diverse) */}
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

          {/* Bottom Action Toolbar: 3 Pill Buttons */}
          <div className="border-t border-slate-100 bg-white px-3 pt-2 pb-1.5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
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
                    ? "សរសេរសំណួរអំពីការប្រឡង ATQ តម្លៃ មុខវិជ្ជា..."
                    : "Ask about ATQ exams, booking, fees, subjects..."
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

      {/* 2. Floating Circular Close/Toggle Button at Bottom Right */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="qa-session-bubble absolute bottom-[calc(100%+0.9rem)] right-0 w-max max-w-[220px] rounded-2xl rounded-br-sm border border-slate-200 bg-white px-3 py-2 text-left text-[15px] font-medium leading-snug text-slate-700 shadow-xl shadow-slate-900/10 transition hover:bg-sky-50 hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-300"
          >
            {language === "km"
              ? "សួស្តី! ខ្ញុំជា ATQ Assistant។ តើអ្នកមានសំណួរអ្វីដែរ?"
              : "Hello! I'm ATQ Assistant. Any questions?"}
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

export default AIBeta;
