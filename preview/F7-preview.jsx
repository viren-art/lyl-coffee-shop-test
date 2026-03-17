export default function F7Preview() {
  const [buildStage, setBuildStage] = React.useState('idle');
  const [buildMetrics, setBuildMetrics] = React.useState(null);
  const [showOptimizations, setShowOptimizations] = React.useState(true);
  const [selectedTab, setSelectedTab] = React.useState('overview');

  // Simulate build process
  const runBuildSimulation = React.useCallback(() => {
    setBuildStage('analyzing');
    
    setTimeout(() => {
      setBuildStage('bundling');
    }, 800);
    
    setTimeout(() => {
      setBuildStage('optimizing');
    }, 1600);
    
    setTimeout(() => {
      setBuildStage('complete');
      setBuildMetrics({
        totalSize: 87.4,
        jsSize: 42.3,
        cssSize: 8.2,
        assetsSize: 36.9,
        chunks: 3,
        fcpTime: 1.2,
        ttiTime: 2.4,
        lcpTime: 1.8,
        buildTime: 3.2
      });
    }, 2400);
  }, []);

  React.useEffect(() => {
    runBuildSimulation();
  }, [runBuildSimulation]);

  const optimizations = [
    {
      name: 'Code Splitting',
      description: 'React vendor chunk separated for better caching',
      impact: 'High',
      savings: '23.4 KB',
      status: 'active',
      icon: '📦'
    },
    {
      name: 'Tree Shaking',
      description: 'Unused code eliminated from bundle',
      impact: 'High',
      savings: '18.7 KB',
      status: 'active',
      icon: '🌳'
    },
    {
      name: 'CSS Purging',
      description: 'Tailwind utilities reduced to used classes only',
      impact: 'Critical',
      savings: '156.3 KB',
      status: 'active',
      icon: '✂️'
    },
    {
      name: 'Minification',
      description: 'JavaScript and CSS compressed with esbuild',
      impact: 'High',
      savings: '34.2 KB',
      status: 'active',
      icon: '🗜️'
    },
    {
      name: 'Content Hashing',
      description: 'Asset filenames include hash for cache busting',
      impact: 'Medium',
      savings: 'N/A',
      status: 'active',
      icon: '🔐'
    },
    {
      name: 'Gzip Compression',
      description: 'Server-side compression enabled on hosting',
      impact: 'Critical',
      savings: '62.1 KB',
      status: 'active',
      icon: '📦'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'First Contentful Paint',
      value: buildMetrics?.fcpTime || 0,
      target: 1.5,
      unit: 's',
      status: buildMetrics && buildMetrics.fcpTime < 1.5 ? 'pass' : 'pending',
      description: 'Time until first content renders'
    },
    {
      metric: 'Time to Interactive',
      value: buildMetrics?.ttiTime || 0,
      target: 3.0,
      unit: 's',
      status: buildMetrics && buildMetrics.ttiTime < 3.0 ? 'pass' : 'pending',
      description: 'Time until page is fully interactive'
    },
    {
      metric: 'Largest Contentful Paint',
      value: buildMetrics?.lcpTime || 0,
      target: 2.5,
      unit: 's',
      status: buildMetrics && buildMetrics.lcpTime < 2.5 ? 'pass' : 'pending',
      description: 'Time until largest content element renders'
    },
    {
      metric: 'Total Bundle Size',
      value: buildMetrics?.totalSize || 0,
      target: 100,
      unit: 'KB',
      status: buildMetrics && buildMetrics.totalSize < 100 ? 'pass' : 'pending',
      description: 'Gzipped bundle size for initial load'
    }
  ];

  const buildStages = [
    { id: 'analyzing', label: 'Analyzing Dependencies', icon: '🔍' },
    { id: 'bundling', label: 'Bundling Modules', icon: '📦' },
    { id: 'optimizing', label: 'Optimizing Assets', icon: '⚡' },
    { id: 'complete', label: 'Build Complete', icon: '✅' }
  ];

  const getStageStatus = (stageId) => {
    const stages = ['analyzing', 'bundling', 'optimizing', 'complete'];
    const currentIndex = stages.indexOf(buildStage);
    const stageIndex = stages.indexOf(stageId);
    
    if (stageIndex < currentIndex) return 'complete';
    if (stageIndex === currentIndex) return 'active';
    return 'pending';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl p-6 border border-violet-500/20 shadow-lg shadow-violet-500/10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Performance Optimization
              </h1>
              <p className="text-slate-400 mt-2">
                Vite production build configuration with advanced optimizations
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-violet-400">
                {buildMetrics ? `${buildMetrics.totalSize} KB` : '---'}
              </div>
              <div className="text-sm text-slate-400 mt-1">Total Bundle Size</div>
            </div>
          </div>
        </div>

        {/* Build Progress */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/[0.06] shadow-lg shadow-black/20">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🏗️</span>
            Build Pipeline
          </h2>
          
          <div className="space-y-4">
            {buildStages.map((stage, index) => {
              const status = getStageStatus(stage.id);
              return (
                <div key={stage.id} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all ${
                    status === 'complete' ? 'bg-emerald-500/20 border-2 border-emerald-500' :
                    status === 'active' ? 'bg-violet-500/20 border-2 border-violet-500 animate-pulse' :
                    'bg-slate-700/50 border-2 border-slate-600'
                  }`}>
                    {stage.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-semibold ${
                        status === 'complete' ? 'text-emerald-400' :
                        status === 'active' ? 'text-violet-400' :
                        'text-slate-500'
                      }`}>
                        {stage.label}
                      </span>
                      {status === 'complete' && (
                        <span className="text-xs text-emerald-400">✓ Complete</span>
                      )}
                      {status === 'active' && (
                        <span className="text-xs text-violet-400">⏳ In Progress</span>
                      )}
                    </div>
                    
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full transition-all duration-500 ${
                        status === 'complete' ? 'w-full bg-emerald-500' :
                        status === 'active' ? 'w-2/3 bg-violet-500 animate-pulse' :
                        'w-0 bg-slate-600'
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-white/10">
          {['overview', 'optimizations', 'metrics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 font-semibold rounded-t-xl transition-all ${
                selectedTab === tab
                  ? 'bg-slate-800/50 text-violet-400 border-b-2 border-violet-500'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && buildMetrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl p-5 border border-violet-500/20">
              <div className="text-sm text-slate-400 mb-2">JavaScript Bundle</div>
              <div className="text-3xl font-bold text-violet-400">{buildMetrics.jsSize} KB</div>
              <div className="text-xs text-slate-500 mt-2">Minified + Gzipped</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-5 border border-emerald-500/20">
              <div className="text-sm text-slate-400 mb-2">CSS Bundle</div>
              <div className="text-3xl font-bold text-emerald-400">{buildMetrics.cssSize} KB</div>
              <div className="text-xs text-slate-500 mt-2">Purged + Minified</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl p-5 border border-amber-500/20">
              <div className="text-sm text-slate-400 mb-2">Assets</div>
              <div className="text-3xl font-bold text-amber-400">{buildMetrics.assetsSize} KB</div>
              <div className="text-xs text-slate-500 mt-2">Images + Fonts</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-5 border border-cyan-500/20">
              <div className="text-sm text-slate-400 mb-2">Build Time</div>
              <div className="text-3xl font-bold text-cyan-400">{buildMetrics.buildTime}s</div>
              <div className="text-xs text-slate-500 mt-2">Total Duration</div>
            </div>
          </div>
        )}

        {/* Optimizations Tab */}
        {selectedTab === 'optimizations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {optimizations.map((opt, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-5 border border-white/[0.06] shadow-lg shadow-black/20">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{opt.icon}</div>
                    <div>
                      <h3 className="font-bold text-white">{opt.name}</h3>
                      <p className="text-sm text-slate-400 mt-1">{opt.description}</p>
                    </div>
                  </div>
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    opt.status === 'active' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    'bg-slate-700/50 text-slate-400 border border-slate-600/30'
                  }`}>
                    {opt.status === 'active' ? '✓ Active' : 'Inactive'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <div>
                    <div className="text-xs text-slate-500">Impact</div>
                    <div className={`text-sm font-semibold mt-1 ${
                      opt.impact === 'Critical' ? 'text-rose-400' :
                      opt.impact === 'High' ? 'text-amber-400' :
                      'text-cyan-400'
                    }`}>
                      {opt.impact}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Savings</div>
                    <div className="text-sm font-semibold text-emerald-400 mt-1">{opt.savings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Metrics Tab */}
        {selectedTab === 'metrics' && (
          <div className="space-y-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-5 border border-white/[0.06] shadow-lg shadow-black/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-white">{metric.metric}</h3>
                    <p className="text-sm text-slate-400 mt-1">{metric.description}</p>
                  </div>
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    metric.status === 'pass' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    {metric.status === 'pass' ? '✓ Pass' : '⏳ Pending'}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Current</span>
                    <span className={`font-bold ${
                      metric.status === 'pass' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {metric.value > 0 ? `${metric.value} ${metric.unit}` : '---'}
                    </span>
                  </div>
                  
                  <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        metric.status === 'pass' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                      style={{ width: metric.value > 0 ? `${Math.min((metric.value / metric.target) * 100, 100)}%` : '0%' }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Target</span>
                    <span className="text-slate-500">{metric.target} {metric.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Build Summary */}
        {buildStage === 'complete' && buildMetrics && (
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">✅</div>
              <div>
                <h2 className="text-xl font-bold text-emerald-400">Build Successful</h2>
                <p className="text-slate-400 text-sm mt-1">
                  Production bundle optimized and ready for deployment
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-slate-900/50 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-slate-400">FCP</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">{buildMetrics.fcpTime}s</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-slate-400">TTI</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">{buildMetrics.ttiTime}s</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-slate-400">LCP</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">{buildMetrics.lcpTime}s</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-slate-400">Chunks</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">{buildMetrics.chunks}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}