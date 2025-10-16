"use client";

import { HelpCircle, Minus, Plus } from "lucide-react";
import * as m from "motion/react-m";
import { useState } from "react";

import { Card } from "@/components/ui/card";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const faqItems = [
    {
      question: "ما هي الخدمات التي تقدمونها في مجال هيئة الغذاء والدواء؟",
      answer:
        "نقدم مجموعة شاملة من الخدمات تشمل: الحصول على التراخيص الرسمية، إدراج المنتجات والمصانع، خدمات التخزين المتوافقة مع الاشتراطات، تجهيز المستودعات، والاستشارات التجارية المتخصصة."
    },
    {
      question: "كم يستغرق الحصول على ترخيص هيئة الغذاء والدواء؟",
      answer:
        "المدة تختلف حسب نوع الترخيص والمنتج، لكن عادة تتراوح بين 2-8 أسابيع. نحن نعمل على تسريع العملية من خلال خبرتنا وعلاقاتنا الجيدة مع الجهات المختصة."
    },
    {
      question: "هل تقدمون خدمات للشركات الصغيرة والناشئة؟",
      answer:
        "نعم، نحن متخصصون في دعم الشركات الصغيرة والمتوسطة والناشئة. نقدم باقات مرنة وأسعار تنافسية تناسب احتياجاتهم وميزانياتهم."
    },
    {
      question: "ما هي تكلفة خدماتكم؟",
      answer:
        "التكلفة تعتمد على نوع الخدمة المطلوبة وحجم المشروع. نقدم استشارة مجانية أولى لتقييم احتياجاتكم وتقديم عرض سعر مفصل ومناسب."
    },
    {
      question: "هل تضمنون الحصول على التراخيص؟",
      answer:
        "نعم، لدينا معدل نجاح عالي جداً في الحصول على التراخيص بفضل خبرتنا الطويلة وفهمنا العميق لمتطلبات هيئة الغذاء والدواء. نضمن المتابعة حتى الحصول على الترخيص."
    },
    {
      question: "هل تقدمون خدمات في جميع مناطق المملكة؟",
      answer:
        "نعم، نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية. لدينا شبكة واسعة من الشراكات والمكاتب التي تمكننا من خدمة عملائنا في كل المناطق."
    },
    {
      question: "كيف يمكنني البدء في الحصول على خدماتكم؟",
      answer:
        "يمكنكم التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة مكاتبنا. سنقوم بتحديد موعد للاستشارة المجانية وتقييم احتياجاتكم ووضع خطة عمل مناسبة."
    },
    {
      question: "هل تقدمون دعم ما بعد الحصول على التراخيص؟",
      answer:
        "بالطبع، نقدم دعم مستمر حتى بعد الحصول على التراخيص. هذا يشمل المتابعة الدورية، التجديدات، والمساعدة في أي تحديثات أو تغييرات مطلوبة."
    }
  ];

  return (
    <section
      id="faq"
      className="to-secondary/5 relative overflow-hidden bg-gradient-to-br from-white py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(var(--secondary),0.3)_1px,transparent_0)] bg-[length:50px_50px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <div className="mb-10 text-center sm:mb-20">
            <m.div variants={itemVariants} className="mb-6">
              <span className="border-primary/20 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium">
                <HelpCircle size={18} />
                الأسئلة الشائعة
              </span>
            </m.div>
            <m.h2
              variants={itemVariants}
              className="text-primary mb-8 text-4xl font-bold lg:text-6xl"
            >
              أسئلة شائعة
            </m.h2>
            <m.p
              variants={itemVariants}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600"
            >
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا في مجال هيئة الغذاء
              والدواء
            </m.p>
          </div>

          {/* FAQ Items */}
          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <m.div key={index} variants={itemVariants} className="group">
                  <Card className="gap-0 overflow-hidden border border-gray-200 bg-white py-0 shadow-sm transition-all duration-300 hover:shadow-lg">
                    <button
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-center justify-between p-6 text-right transition-colors duration-200 hover:bg-gray-50"
                    >
                      <h3 className="group-hover:text-primary text-lg font-semibold text-gray-900">
                        {item.question}
                      </h3>
                      <div className="mr-4 flex-shrink-0">
                        {openItems.includes(index) ? (
                          <Minus className="text-primary h-5 w-5 transition-transform duration-200" />
                        ) : (
                          <Plus className="group-hover:text-primary h-5 w-5 text-gray-400 transition-transform duration-200" />
                        )}
                      </div>
                    </button>

                    <m.div
                      initial={false}
                      animate={{
                        height: openItems.includes(index) ? "auto" : 0,
                        opacity: openItems.includes(index) ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                        <p className="leading-relaxed text-gray-600">
                          {item.answer}
                        </p>
                      </div>
                    </m.div>
                  </Card>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
