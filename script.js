// 安全软件特征库
const securitySoftware = {
    // 国内安全软件
    '360安全卫士': ['ZhuDongFangYu', '360tray', '360sd', '360rp', '360safe', 'QHSafeTray', 'QHWatchdog', '360AuthCenter'],
    '360杀毒': ['360sd', '360tray', '360defender', '360leakfixer', 'QHWatchdog'],
    '腾讯电脑管家': ['QQPCTray', 'QQPCMgr', 'QQPCRTP', 'QQPCNetFlow', 'QQPCRealTimeProtect'],
    '金山毒霸': ['kxetray', 'ksafe', 'kxescore', 'kxecore', 'kwsprotect', 'kavstart'],
    '火绒安全': ['HipsTray', 'HipsDaemon', 'HipsMain', 'HipsLog', 'HipsServer', 'HipsComm'],
    '百度杀毒': ['BaiduSdSvc', 'BaiduAnSvc', 'BaiduHips', 'BaiduDefender'],
    '瑞星杀毒': ['RavMonD', 'RsTray', 'RAVTask', 'RAVMon', 'RAVKeeper', 'RAVService'],
    '江民杀毒': ['KVMonXP', 'KVSrvXP', 'KVBackup'],
    '2345安全卫士': ['2345MPCSafe', '2345RTProtect', '2345SafeTray'],
    '小红伞': ['avcenter', 'avguard', 'avgnt'],
    
    // 国际安全软件
    'Kaspersky': ['avp', 'kavfs', 'klnagent', 'kavtray', 'kavsvc', 'kavshell', 'klnagent'],
    'Norton': ['NortonSecurity', 'NS', 'ccSvcHst', 'NPFMntor', 'NortonSecurity', 'ccEvtMgr', 'symerr'],
    'McAfee': ['mcshield', 'MSASCui', 'McCSPServiceHost', 'McAfeeFramework', 'mfemms', 'mctary'],
    'Avast': ['AvastSvc', 'AvastUI', 'aswBoot', 'aswEngSrv', 'aswidsagent', 'ashDisp'],
    'AVG': ['AVGSvc', 'AVGUI', 'avgwdsvc', 'avgfws', 'avgrsx', 'avgcsrvx'],
    'Bitdefender': ['bdagent', 'vsserv', 'bdredline', 'bdservicehost', 'bdntwrk'],
    'ESET': ['ekrn', 'egui', 'eguiProxy', 'epfw', 'epfwlwf', 'epfwwfp'],
    'Trend Micro': ['Tmproxy', 'TmListen', 'NTRTScan', 'TmPfw', 'PccNTMon', 'WebProxy'],
    'Symantec': ['ccSvcHst', 'SmcGui', 'Rtvscan', 'ccapp', 'vptray'],
    'Windows Defender': ['MsMpEng', 'NisSrv', 'SecurityHealthService', 'MpCmdRun'],
    
    // 企业安全软件
    '深信服EDR': ['EDRAGS', 'EDRClient', 'sangfor_edr_kernel', 'sangfor_edr_assist'],
    '天擎终端安全': ['SGM_EDR_Agent', 'SGM_EDR_Service', 'skylar_agent', 'skylar_service'],
    '安天终端安全': ['AntiaAgent', 'AntiaTray', 'AVGUISrv', 'AntiVirusService'],
    '启明星辰天珣': ['TXAgent', 'TXService', 'TXPlatform', 'TXSysDefend'],
    '奇安信': ['QAXService', 'QAXTray', 'QAXAgent', 'QAXSysmon'],
    '金山终端安全': ['ksec', 'ksectray', 'ksafesvc', 'ksdtproxy'],
    '卡巴斯基企业版': ['klnagent', 'kavfsgt', 'kavfsslp', 'klserver'],
    '微软MDATP': ['MsSense', 'SenseIR', 'SenseCncProxy', 'SenseSampleUploader'],
    '联想网御': ['LESCClient', 'LESCService', 'LESCTray'],
    '绿盟': ['NSFocus', 'nsfocus_agent', 'nsfocus_guard'],
    '思福迪': ['Sophos', 'SophosUI', 'SophosAgent'],
    '亚信安全': ['AsiaSecurity', 'AsiaAgent', 'AsiaService'],
    '山石网科': ['HillstoneEndpoint', 'HillstoneAgent'],
    '华为终端安全': ['HuaweiEndpoint', 'HuaweiAgent', 'HuaweiService']
};

// 添加说明内容
const noticeContent = {
    limit: {
        title: '⚠️ 检测限制',
        content: `
            <div class="notice-section">
                <h3>功能限制</h3>
                <p>1. 部分安全软件可能使用动态进程名或隐藏进程</p>
                <p>2. 某些企业版本可能使用自定义进程名</p>
                <p>3. 需要管理员权限才能完整检测所有进程</p>
            </div>
            <div class="notice-section">
                <h3>检测原理</h3>
                <p>1. 通过分析系统进程列表识别安全软件</p>
                <p>2. 基于进程名特征匹配进行检测</p>
                <p>3. 支持主流安全软件的最新版本</p>
            </div>
        `
    },
    guide: {
        title: '💡 使用建议',
        content: `
            <div class="notice-section">
                <h3>使用步骤</h3>
                <p>1. 点击"复制命令"获取检测命令</p>
                <p>2. 以管理员权限运行命令提示符</p>
                <p>3. 粘贴并执行命令，复制输出结果</p>
                <p>4. 将结果粘贴到文本框中进行检测</p>
            </div>
            <div class="notice-section">
                <h3>注意事项</h3>
                <p>1. 建议使用管理员权限运行检测命令</p>
                <p>2. 如未检测到已安装的安全软件，可尝试重新运行命令</p>
                <p>3. 检测结果仅供参考，以实际安装状态为准</p>
            </div>
        `
    },
    update: {
        title: '🔄 更新说明',
        content: `
            <div class="notice-section">
                <h3>更新内容</h3>
                <p>1. 定期更新安全软件特征库</p>
                <p>2. 持续优化检测算法提高准确率</p>
                <p>3. 欢迎反馈未收录的安全软件</p>
            </div>
            <div class="notice-section">
                <h3>后续计划</h3>
                <p>1. 添加更多安全软件支持</p>
                <p>2. 优化检测准确度</p>
                <p>3. 提供更详细的检测报告</p>
            </div>
        `
    }
};

// 显示��载动画
function showLoading() {
    const loading = document.getElementById('loading-container');
    loading.style.display = 'flex';
    loading.classList.add('fade-in');
}

// 隐藏加载动画
function hideLoading() {
    const loading = document.getElementById('loading-container');
    loading.classList.add('fade-out');
    setTimeout(() => {
        loading.style.display = 'none';
        loading.classList.remove('fade-in', 'fade-out');
    }, 500);
}

// 检测安全软件
function detectAV() {
    showLoading();
    
    setTimeout(() => {
        const input = document.getElementById('resultText').value;
        if (!input.trim()) {
            alert('请先粘贴进程列表！');
            hideLoading();
            return;
        }

        let result = '检测结果：\n\n';
        let detected = false;

        // 遍历安全件征库
        for (const [software, processes] of Object.entries(securitySoftware)) {
            const found = processes.some(process => input.toLowerCase().includes(process.toLowerCase()));
            if (found) {
                result += `✅ 检测到 ${software}\n`;
                detected = true;
            }
        }

        if (!detected) {
            result += '❌ 未检测到已知的安全软件\n';
        }

        result += '\n注：某���安全软件可能使用了自定义进程名或隐藏进程，检测结果仅供参考。';
        
        document.getElementById('resultText').value = result;
        hideLoading();
    }, 1000); // 模拟检测延迟
}

// 显示浮动提示
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    // 动画结束后移除 show 类并隐藏元素
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2300);
}

// 复制命令
function copyCommand() {
    const command = 'tasklist /SVC';
    navigator.clipboard.writeText(command).then(() => {
        showToast('命令已复制到剪贴板');
    }).catch(err => {
        console.error('复制失败:', err);
        showToast('复制失败，请手动复制：tasklist /SVC');
    });
}

// 清空结果
function clearResult() {
    document.getElementById('resultText').value = '';
}

// 显示支持的软件列表
function showSupportedSoftware() {
    const modal = document.getElementById('software-modal');
    const domesticList = document.getElementById('domestic-list');
    const internationalList = document.getElementById('international-list');
    const enterpriseList = document.getElementById('enterprise-list');
    
    // 清空现有列��
    domesticList.innerHTML = '';
    internationalList.innerHTML = '';
    enterpriseList.innerHTML = '';
    
    // 获取所有软件名称并分类
    Object.keys(securitySoftware).forEach(name => {
        const div = document.createElement('div');
        div.className = 'software-item';
        div.textContent = name;
        
        // 企业安全软件
        if (
            name.includes('EDR') || 
            name.includes('终端') || 
            name.includes('天珣') ||
            name.includes('MDATP') ||
            name === '深信服EDR' ||
            name === '奇安信' ||
            name === '绿盟' ||
            name === '思福迪' ||
            name === '亚信安全' ||
            name === '山石网科' ||
            name === '华为终端安全' ||
            name === '联想网御'
        ) {
            enterpriseList.appendChild(div.cloneNode(true));
        }
        // 国际安全软件
        else if (
            name === 'Kaspersky' ||
            name === 'Norton' ||
            name === 'McAfee' ||
            name === 'Avast' ||
            name === 'AVG' ||
            name === 'Bitdefender' ||
            name === 'ESET' ||
            name === 'Trend Micro' ||
            name === 'Symantec' ||
            name === 'Windows Defender'
        ) {
            internationalList.appendChild(div.cloneNode(true));
        }
        // 国内安全软件
        else {
            domesticList.appendChild(div.cloneNode(true));
        }
    });
    
    // 显示模态框
    modal.style.display = 'flex';
    
    // 添加关闭功能
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    
    // 点击模态框外部关闭
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// 显示说明弹窗
function showNoticeModal(type) {
    const modal = document.getElementById('notice-modal');
    const title = document.getElementById('notice-title');
    const content = document.getElementById('notice-content');
    
    title.textContent = noticeContent[type].title;
    content.innerHTML = noticeContent[type].content;
    
    modal.style.display = 'flex';
    
    // 添加关闭功能
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    
    // 点击模态框外部关闭
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
} 