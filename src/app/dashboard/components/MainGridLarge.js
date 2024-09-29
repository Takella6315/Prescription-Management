import React from 'react';
import StatCardLarge from './StatCardLarge';
import Copyright from '../internals/components/Copyright';

const data = [
  {
    medicine: 'Atorvastatin (Lipitor)',
    dosage: '25mg',
    interval: 'Tablet - Daily',
    time: 'Scheduled Time: 7:00AM',
    medicalIssue: 'Hypercholesterolemia (High Cholestorol)',
    medicalDescription: 'High cholesterol, also known as hypercholesterolemia, is a medical condition'
    + 'characterized by elevated levels of low-density lipoprotein (LDL) cholesterol in the blood'
    + 'Hypercholesterolemia is a risk factor for the development of atherosclerosis, heart disease,'
    + 'and stroke. It can be caused by a combination of genetic and lifestyle factors, including: '
    + 'Poor diet (high in saturated and trans fats, cholesterol, and refined carbohydrate Lack of '
    + 'physical activity Obesity Family history Certain medical conditions (e.g., diabetes, kidney disease,'
    + 'hypothyroidism) Medications (e.g., corticosteroids, birth control pills)',
    doctorComments: 'During our recent consultation, we discussed your diagnosis of hypercholesterolemia,' 
    + 'commonly referred to as high cholesterol. As we noted, your cholesterol levels are elevated,'
    + 'particularly the low-density lipoprotein (LDL) cholesterol, which is a known risk factor for '
    + 'cardiovascular diseases such as atherosclerosis, heart disease, and stroke. It is essential '
    + 'to address these elevated levels through both medication and lifestyle modifications. I have '
    + 'prescribed Atorvastatin (Lipitor) at a dosage of 25mg to be taken daily in tablet form, with a '
    + 'scheduled time of 7:00AM each day. This medication will help lower your LDL cholesterol and '
    + 'reduce the risk of complications associated with high cholesterol. Regular physical activity is '
    + 'also key in managing cholesterol levels, along with maintaining a healthy weight. Given your '
    + 'family history and any other underlying conditions you may have, such as diabetes or hypothyroidism, '
    + 'its especially important to follow these recommendations. We will continue to monitor your cholesterol '
    + 'levels through regular follow-up visits and blood tests to ensure the treatment plan is effective. '
    + 'Please reach out if you have any concerns or if you experience any side effects from the medication',
  },
  {
    medicine: 'Metformin (Glucophage)',
    dosage: '8.5mL',
    medicalDescription: 'Gestational diabetes mellitus (GDM) is a type of diabetes that develops during '
    + 'pregnancy, typically after the 24th week. It is characterized by high blood sugar levels that are '
    + 'not caused by pre-existing diabetes, but rather by hormonal changes and insulin resistance during '
    + 'pregnancy. GDM is often divided into two classes: Diet-controlled GDM (class A1GDM): managed through '
    + 'dietary changes and lifestyle modifications GDM requiring pharmacologic treatment of hyperglycemia. '
    + '(class A2GDM): requires medication to control blood sugar levels. Women diagnosed with GDM are at '
    + 'high risk for developing type 2 diabetes long-term',
    
  },
  {
    medicine: 'Levothryoxine (Synthroid)',
    dosage: '115mcg',
    medicalDescription: 'Hyperthyroidism, also known as overactive thyroid or thyrotoxicosis, is a condition '
    + 'where the thyroid gland produces excessive amounts of thyroid hormones, including triiodothyronine (T3) '
    + 'and thyroxine (T4). This hyperactivity disrupts the body’s metabolic processes, leading to a range of '
    + 'symptoms and complications. The thyroid gland, located in the neck, plays a crucial role in regulating '
    + 'metabolism, growth, and development. It produces thyroid hormones that control the rate at which the '
    + 'body uses energy. In a normal state, the thyroid gland maintains a delicate balance of hormone production.',
  },
];

export default function MainGridLarger() {
  return (
    <div className="min-h-screen h-full flex flex-col w-full sm:max-w-full md:max-w-[1700px]">
      <div className="flex-1 overflow-y-auto">
        <h2 className="font-bold mb-4 text-4xl">AI Medical Assistant</h2>
        
        {/* Grid to show 2 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mb-4"> 
          {data.map((card, index) => (
            <div key={index}>
              <StatCardLarge {...card} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto py-4">
        <Copyright />
      </div>
    </div>
  );
}
