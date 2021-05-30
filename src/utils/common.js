/* eslint-disable */
export const USER_PROFILE = {
	cc_long_text_1:
		'Here is the rs.',
	cpin: {
		para1:
			'CPNI Opt-in: ABCs mts and services to you.',
		para2:
			'RestrictinarketinI to offer om ABCs.',
		learn_more: 'Learn.',
	},
	deactivated: [
		"There's t at ",
		<b key={0}>866-868-8695</b>,
	],
	emergency_service_text:
		'The address you provide below will be used by emergency services. Please ensure the address is accurate.',
	error_text: [
		'Oops, looks like there is a problem with your account information and captions may not work until this is fixed. Please call us at ',
		<b key={0}>85 </b>,
		'to resolve this.',
	],
	WRONG_ADDRESS: [
		'Theect, please contact support at ',
		<b key={0}>85 </b>,
	],
};

export const LEARN_MORE = 'Learn more.';

const dateTimeFormat = (date, format) => {
	return new Date('en', format).format(date);
};

export const formatDate = (dateTime) => {
	let d = new Date(dateTime);
	// we only need to do string check and not type check for date
	// eslint-disable-next-line eqeqeq
	if (d == 'Invalid Date') {
		const tDate = dateTime.split('T');
		d = new Date(tDate[0]);
	}

	const ye = dateTimeFormat(d, { year: 'numeric' });
	const mo = dateTimeFormat(d, { month: 'short' });
	const da = dateTimeFormat(d, { day: '2-digit' });

	return `${mo} ${da} ${ye}` || '';
};

const pad = (n) => {
	return n < 10 ? `0${n}` : n;
};

export const formatDateWithSlash = (dateTime) => {
	let d = new Date(dateTime);
	// we only need to do string check and not type check for date
	// eslint-disable-next-line eqeqeq
	if (d == 'Invalid Date') {
		const tDate = dateTime.split('T');
		d = new Date(tDate[0]);
	}

	const y = d.getUTCFullYear();
	const m = pad(d.getUTCMonth() + 1);
	const dt = pad(d.getUTCDate());

	return `${m}/${dt}/${y}` || '';
};

export const showDateTime = (dateTime) => {
	let d = new Date(dateTime);
	// we only need to do string check and not type check for date
	// eslint-disable-next-line eqeqeq
	if (d == 'Invalid Date') {
		const tDate = dateTime.split('T');
		d = new Date(tDate[0]);
	}

	const y = d.getUTCFullYear();
	const m = pad(d.getUTCMonth() + 1);
	const dt = pad(d.getUTCDate());
	const hh = pad(d.getUTCHours());
	const mm = pad(d.getUTCMinutes());
	const ss = pad(d.getUTCSeconds());

	return `${m}/${dt}/${y} ${hh}:${mm}:${ss}` || '';
};

export const convertDate = (date) => {
	const tDate = new Date(date);

	const y = tDate.getUTCFullYear();
	const mm = pad(tDate.getUTCMonth() + 1);
	const d = pad(tDate.getUTCDate());
	const h = pad(tDate.getUTCHours());
	const mn = pad(tDate.getUTCMinutes());
	const s = pad(tDate.getUTCSeconds());
	// sample date format required => 2021-03-08T21:19:47Z
	return `${y}-${mm}-${d}T${h}:${mn}:${s}Z`;
};

export const DOC_TYPES = [
	{
		name: 'Phone Bill',
		value: 'Phone Bill',
	},
	{
		name: 'Unexpired United States Government, military or state issued ID',
		value: 'Unexpired United States Government, military or state issued ID',
	},
	{
		name: 'Military Discharge Documentation',
		value: 'Military Discharge Documentation',
	},
	{
		name: "Unexpired Driver's License",
		value: "Unexpired Driver\\'s License",
	},
];

export const DOC_STATUS = ['Approved', 'Rejected', 'Under Review'];

export const dateConversion = (date) => {
	const tDate = new Date(date);
	const y = tDate.getFullYear();
	const mm = pad(tDate.getMonth() + 1);
	const d = pad(tDate.getDate());
	const h = pad(tDate.getHours());
	const mn = pad(tDate.getMinutes());
	const s = pad(tDate.getSeconds());
	// sample date format required => 2021-03-08T21:19:47Z
	return `${y}-${mm}-${d}T${h}:${mn}:${s}Z`;
};

export const DOWNLOAD_STATUS_MSG =
	'Your request is added to the queue, an email will be sent once the request is completed. You can view the status on the Downloads tab.';

export const DOC_REVIEWED_MSG = 'The document has already been reviewed';

export const validateSuperAdminRole = () => {
	return localStorage.getItem('user_role') === 'SuperAdmin' ? true : false;
};

export const isCustomerLogin = () => {
	return localStorage.getItem('user_role') === 'Customer' ? true : false;
};

export const ALLOWED_EXTENTIONS = ['png', 'jpg', 'pdf', 'jpeg'];

export const genericError = (err) => {
	return err.response
		? { status: err.response.status, response: err.response }
		: err;
};
