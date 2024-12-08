import { FileText } from 'lucide-react';

const documents = [
  {
    id: 1,
    name: 'Patient Visit Notes - John Doe',
    date: '2024-03-15',
    status: 'Completed',
    codes: ['E11.9', '99213'],
  },
  {
    id: 2,
    name: 'Surgical Report - Jane Smith',
    date: '2024-03-14',
    status: 'Processing',
    codes: [],
  },
];

export function RecentDocuments() {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-900">Recent Documents</h2>
      <div className="mt-4 divide-y divide-gray-200 rounded-lg border border-gray-200">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <FileText className="h-6 w-6 text-gray-400" />
              <div>
                <h3 className="text-sm font-medium text-gray-900">{doc.name}</h3>
                <p className="text-sm text-gray-500">Uploaded on {doc.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  doc.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {doc.status}
              </span>
              {doc.codes.length > 0 && (
                <div className="flex space-x-2">
                  {doc.codes.map((code) => (
                    <span
                      key={code}
                      className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}