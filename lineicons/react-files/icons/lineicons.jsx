import React from 'react';

function Lineicons(props) {
	const title = props.title || "lineicons";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M28.168 23.674c-2.002-2.58-3.692-4.002-6.494-4.002a3.986 3.986 0 0 0-4.002 4.002 3.986 3.986 0 0 0 4.002 4.003c3.47 0 5.204-2.135 7.962-5.96l.063-.085c.776-1.056 1.603-2.18 2.539-3.258-.977 1.118-1.83 2.272-2.602 3.343l-.534.716c-.33.443-.642.862-.934 1.241zM21.674 13c4.982 0 8.228 2.446 10.674 5.248C34.814 15.445 38.033 13 43.023 13c5.871 0 10.674 4.803 10.674 10.674h-6.671a3.986 3.986 0 0 0-4.003-4.002c-3.47 0-5.204 2.134-7.961 5.96l.532-.714.002-.002c.33-.444.641-.862.934-1.242 2 2.58 3.691 4.003 6.493 4.003a3.986 3.986 0 0 0 4.003-4.003h6.671c0 5.871-4.803 10.675-10.674 10.675-4.981 0-8.228-2.446-10.674-5.248-2.466 2.803-5.684 5.248-10.675 5.248-5.87 0-10.674-4.804-10.674-10.675C11 17.804 15.803 13 21.674 13zM35 25.717c-.778 1.057-1.606 2.183-2.543 3.261.978-1.118 1.833-2.274 2.606-3.347l-.063.086zM1 40.131v11.15h6.399v-1.454H2.55V40.13H1zm7.49.776v1.551h1.55v-1.551H8.49zm0 2.327v8.047h1.55v-8.047H8.49zm19.56-2.327v1.551h1.55v-1.551h-1.55zm0 2.327v8.047h1.55v-8.047h-1.55zm-10.01 1.939c.12.34.193.678.242.994.04.26.063.502.084.715l.012.133v4.29h-1.575v-3.757c0-.315-.024-.63-.073-.97a2.926 2.926 0 0 0-.29-.92 1.809 1.809 0 0 0-.607-.679c-.266-.17-.606-.267-1.042-.267-.29 0-.557.049-.8.146-.242.097-.46.242-.654.436s-.34.46-.436.8c-.121.34-.17.727-.17 1.212h-.024v3.999h-1.551v-8.047h1.55v.97a3.22 3.22 0 0 1 .631-.51c.509-.315 1.115-.46 1.842-.46.557 0 1.018.097 1.406.267.388.17.678.412.92.703.219.29.413.605.534.945zm36.84 0c.122.34.194.678.243.994.02.13.035.255.05.374.022.172.042.331.07.474v4.29h-1.575v-3.757c0-.315-.024-.63-.072-.97a2.924 2.924 0 0 0-.291-.92c-.17-.267-.364-.51-.63-.679-.267-.17-.606-.267-1.042-.267-.291 0-.558.049-.8.146-.243.097-.46.242-.655.436-.194.194-.34.46-.436.8-.121.34-.17.727-.17 1.212h-.024v3.999h-1.551v-8.047h1.551v.97a3.22 3.22 0 0 1 .63-.51c.51-.315 1.115-.46 1.842-.46.558 0 1.018.097 1.406.267.388.17.679.412.921.703.218.29.412.605.533.945zm-27.776 2.496h-.776v.049H21.19c.048.63.242 1.139.557 1.527.388.46.946.678 1.697.678.485 0 .897-.096 1.26-.315.34-.194.63-.509.825-.896l1.526.46a3.473 3.473 0 0 1-1.43 1.576 4.308 4.308 0 0 1-2.132.557c-.8 0-1.503-.17-2.11-.509a3.358 3.358 0 0 1-1.405-1.382c-.34-.605-.509-1.308-.509-2.084 0-.824.145-1.551.485-2.157.34-.63.8-1.09 1.381-1.43.582-.34 1.285-.51 2.06-.51.8 0 1.503.17 2.085.534.558.34.994.873 1.285 1.527.29.679.387 1.454.339 2.375zm-3.684-3.126c-.776 0-1.358.242-1.745.703-.243.315-.412.703-.534 1.187h4.34c-.074-.533-.243-.97-.486-1.26-.339-.412-.872-.63-1.575-.63zm8.895 6.205c.582.363 1.285.533 2.109.533.848 0 1.6-.194 2.181-.582.606-.412 1.042-.97 1.309-1.72l-1.575-.364a1.882 1.882 0 0 1-.703.945c-.315.218-.703.34-1.212.34-.752 0-1.31-.243-1.673-.728-.387-.485-.581-1.14-.581-1.915 0-.509.072-.97.242-1.357.145-.412.388-.727.727-.945.34-.218.752-.34 1.26-.34.461 0 .873.122 1.212.364.34.242.606.557.752.994l1.551-.412a2.902 2.902 0 0 0-1.236-1.697c-.63-.412-1.382-.63-2.254-.63-.8 0-1.503.17-2.085.509-.581.34-1.018.824-1.333 1.43-.315.606-.485 1.309-.485 2.084 0 .752.146 1.455.461 2.06.315.606.751 1.091 1.333 1.43zm8.556.024c.582.34 1.285.509 2.084.509.8 0 1.479-.17 2.085-.485.606-.364 1.066-.824 1.381-1.43.316-.606.485-1.309.485-2.109 0-.775-.17-1.478-.485-2.084-.339-.606-.8-1.09-1.381-1.43-.582-.34-1.285-.51-2.085-.51-.775 0-1.478.17-2.06.51-.606.34-1.042.8-1.381 1.406-.315.606-.485 1.309-.485 2.108 0 .776.17 1.479.485 2.085.315.606.775 1.09 1.357 1.43zm3.805-1.6c-.388.485-.945.727-1.72.727-.752 0-1.334-.242-1.697-.751-.388-.485-.582-1.115-.582-1.915 0-.509.073-.97.242-1.357.17-.388.413-.703.752-.921.34-.218.751-.34 1.284-.34.776 0 1.334.243 1.721.727.388.485.582 1.116.582 1.915 0 .8-.194 1.43-.582 1.915zm12.7 1.503c.631.412 1.43.606 2.4.606 1.018 0 1.818-.218 2.351-.679.582-.412.873-1.018.873-1.77a1.84 1.84 0 0 0-.267-.993c-.17-.267-.46-.509-.848-.703-.388-.218-.921-.388-1.6-.557a19.93 19.93 0 0 1-1.43-.388c-.315-.097-.533-.218-.654-.34a.584.584 0 0 1-.17-.436c0-.29.146-.509.437-.678.29-.17.678-.243 1.139-.219.485 0 .872.122 1.187.34.291.218.485.509.534.872l1.6-.266a2.138 2.138 0 0 0-.534-1.188c-.29-.34-.679-.582-1.163-.776a5 5 0 0 0-1.648-.266c-.63 0-1.188.097-1.649.29-.46.195-.824.461-1.09.8-.267.34-.388.752-.388 1.212 0 .364.097.68.266.946.17.242.461.484.873.678.412.194.97.388 1.648.558.56.15.986.282 1.295.378l.11.034c.316.097.51.218.607.34a.7.7 0 0 1 .145.46c0 .339-.145.581-.412.775-.266.194-.654.291-1.139.291-.533 0-.97-.121-1.333-.34-.34-.242-.582-.557-.679-.944l-1.6.242a2.649 2.649 0 0 0 1.14 1.72z" fill="#000000" fillRule="evenodd"/>
	</g>
</svg>
	);
};

export default Lineicons;