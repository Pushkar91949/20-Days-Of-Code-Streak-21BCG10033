function aveSpd(upTime, upSpd, downSpd) {
	const distance=upSpd*(1/60)*upTime;
	const dtime=distance/downSpd;
	const avgSpeed=(distance*2)/((upTime/60)+dtime);
	return avgSpeed
}