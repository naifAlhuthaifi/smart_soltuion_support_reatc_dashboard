import React from 'react';
import { useLocalization } from  "../providers/LocalizationContext.tsx"; // Adjust the path accordingly

const InfoWidgets = () => {
  const { language, translate } = useLocalization();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-14 py-4">
      {/* Temperature Widget */}
      <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
        <div className="text-sm text-gray-500">{translate('Current Temperature || درجة الحرارة الحالية')}</div>
        <div className="text-xl font-semibold text-gray-800">22°C</div>
      </div>

      {/* Device Status Widget */}
      <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
        <div className="text-sm text-gray-500">{translate('Device Status || حالة الجهاز')}</div>
        <div className="text-xl font-semibold text-green-600">{translate('Online || متصل')}</div>
      </div>

      {/* Data Summary Widget */}
      <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
        <div className="text-sm text-gray-500">{translate('Data Summary || ملخص البيانات')}</div>
        <div className="text-xl font-semibold text-gray-800">{translate('Total: 1024 || الإجمالي: 1024')}</div>
      </div>
    </div>
  );
};

export default InfoWidgets;
