---
id: dwarf
title: Dwarf
sidebar_label: Dwarf
---

## backtrace

Shortcut to retrieve native backtrace

```javascript
Interceptor.attach(targetPtr, function() {
    console.log(backtrace(this.context));
}
```

___

## enumerateExports

Enumerate exports for the given module name or pointer

```javascript
enumerateExports(Process.findModuleByName('libtarget.so'));
```

___

## enumerateImports

Enumerate imports for the given module name or pointer

```javascript
enumerateImports(Process.findModuleByName('libtarget.so'));
```

___

## enumerateJavaClasses

Enumerate java classes

```javascript
enumerateJavaClasses().forEach(function(clazz) {
    console.log(clazz);
});;
```

___

## enumerateJavaMethods

Enumerate method for the given class name

```javascript
enumerateJavaMethods('android.app.Activity');
```

___

## enumerateModuleInfo

Enumerate all information about the module (imports / exports / symbols)

```javascript
enumerateModuleInfo(Process.findModuleByName('target.so'));
```

___

## enumerateModules

Enumerate loaded modules

```javascript
enumerateModules(true); // symbols, exports and imports - yes please.
```

___

## enumerateObjCClasses

Enumerate ObjC classes in the given module

```javascript
enumerateObjCClasses('module');
```

___

## enumerateObjCMethods

Enumerate ObjC methods for the given class

```javascript
enumerateObjCMethods('class');
```

___

## enumerateObjCModules

Enumerate modules for ObjC inspector panel

```javascript
enumerateObjCModules();
```

___

## enumerateRanges

Enumerate all mapped ranges

```javascript
enumerateRanges().forEach(function(range) {
    console.log(range.base, range.size);
});
```

___

## enumerateSymbols

Enumerate symbols for the given module name or pointer

```javascript
enumerateSymbols('module');
```

___

## evaluate

Evaluate javascript. Used from the UI to inject javascript code into the process

```javascript
evaluate('console.log(1)');
```

___

## evaluateFunction

Evaluate javascript. Used from the UI to inject javascript code into the process

```javascript
evaluateFunction('(function() {
    // do stuff
})();');
```

___

## evaluatePtr

Evaluate any input and return a NativePointer

```javascript
evaluatePtr(10 + 10 + 0xabcd);
evaluatePtr('0xabcd');
```

___

## findExport

Shortcut to quickly retrieve an export

```javascript
const openAddress = findExport('open');
const myTargetAddress = findExport('target_func', 'target_module.so');
```

___

## findModule

Find a module providing any argument. Could be a string/int pointer or module name

```javascript
findModule('mymodule');
```

___

## findSymbol

Find a symbol matching the given pattern

```javascript
findSymbol('*link*');
```

___

## getAddressTs

get telescope information for the given pointer argument

```javascript
getAddressTs(0xdeadbeef);
```

___

## getDebugSymbols

Return an array of DebugSymbol for the requested pointers

```javascript
getDebugSymbols([ptr(0x1234), ptr(0xabcd)]);
```

___

## getInstruction

Shortcut to retrieve an Instruction object for the given address

```javascript
getInstruction(0xabcd);
```

___

## getRange

Return a RangeDetails object or null for the requested pointer

```javascript
getRange(0xabcd);
```

___

## getSymbolByAddress

Return DebugSymbol or null for the given pointer

```javascript
getSymbolByAddress(0xabcd);
```

___

## hookAllJavaMethods

Hook all the methods for the given java class

```javascript
hookAllJavaMethods('android.app.Activity', function() {
    console.log('hello from:', this.className, this.method);
})
```

___

## hookClassLoaderClassInitialization

Receive a callback whenever a java class is going to be loaded by the class loader.

```javascript
hookClassLoaderClassInitialization('com.target.classname', function() {
    console.log('target is being loaded');
})
```

___

## hookJavaConstructor

Hook the constructor of the given java class
```javascript
hookJavaConstructor('android.app.Activity', function() {
    console.log('activity created');
})
```

___

## hookJavaMethod

Hook the constructor of the given java class
```javascript
hookJavaConstructor('android.app.Activity.onCreate', function() {
    console.log('activity created');
    var savedInstanceState = arguments[0];
    if (savedInstanceState !== null) {
        return this.finish();
    } else {
        return this.overload.call(this, arguments);
    }
})
```

___

## hookModuleInitialization

Receive a callback when the native module is being loaded
```javascript
hookModuleInitialization('libtarget.so', function() {
    console.log('libtarget is being loaded');
});
```

___

## injectBlob

Map the given blob as hex string using memfd:create with the given name

```javascript
injectBlob('blob', 'aabbccddeeff');
```

___

## isAddressWatched

```javascript
var alreadyWatched = isAddressWatched(0x1234);
```

___

## javaBacktrace

get the java stack trace. Must be executed in JVM thread

```javascript
Java.perform(function() {
    console.log(javaBacktrace());
});
```

___

## jvmExplorer

get the explorer object for the given java handle.
required by UI

___

## log

log whatever to Dwarf console

```javascript
log('12345');
```

___

## putBreakpoint

put a breakpoint on a native pointer or a java class with an optional evaluated condition

```javascript
var nativeTarget = findExport('memcpy');

putBreakpoint(nativeTarget);

nativeTarget = findExport('open');
putBreakpoint(target, function() {
    if (this.context.x0.readUtf8String().indexOf('prefs.json') >= 0) {
        return true;
    }

    return false;
});

var javaTarget = 'android.app.Activity.onCreate';
putBreakpoint(javaTarget);
```

___

## putJavaClassInitializationBreakpoint

Put a java class initialization breakpoint

```javascript
putJavaClassInitializationBreakpoint('android.app.Activity');
```

___

## putModuleInitializationBreakpoint

Put a native module initialization breakpoint

```javascript
putModuleInitializationBreakpoint('libtarget.so');
```

___

## putWatchpoint

Put a watchpoint on the given address

```javascript
putWatchpoint(0x1000, 'r');

var target = findExport('memcpy');
Interceptor.attach(target, {
    onLeave: function(ret) {
        putWatchpoint(this.context.x0, 'rw', function() {
           log(backtrace(this.context));
        });
    }
});
```

___

## readBytes

A shortcut for safely reading from memory

```javascript
var buf = readBytes(0x1234, 32);
```

___

## readPointer

get a pointer from the given address

```javascript
var p = readPointer(0x1234);
```

___

## readString

A shortcut and secure way to read a string from a pointer with frida on any os

```javascript
var what = readString(0x1234);
var a = readString(0xabcd, 32);
```

___

## releaseFromJs

resume the execution of the given thread id when in breakpoints

```javascript
Interceptor.attach(0x1234, function() {
    // do my stuff
    releaseFromJs(Process.getCurrentThreadId());
});
```

___

## removeBreakpoint

Remove a breakpoint on address_or_class

___

## removeJavaClassInitializationBreakpoint

Remove a java class initialization breakpoint on moduleName

```javascript
removeJavaClassInitializationBreakpoint('android.app.Activity');
```

___

## removeModuleInitializationBreakpoint

Remove a module initialization breakpoint on moduleName

```javascript
removeModuleInitializationBreakpoint('mytarget.so');
```

___

## removeWatchpoint

Remove a watchpoint on the given address

```javascript
removeWatchpoint(0x1234);
```

___

## restart

Restart the application
Android only

```javascript
restart();
```

___

## setData

Send whatever to the data panel

```javascript
var sendCount = 0;
Interceptor.attach(findExport('send'), function() {
    setData(sendCount + '', this.context.x1.readByteArray(parseInt(this.context.x2)))
    sendCount++;
});
```

___

## startJavaTracer

Start the java tracer on the given classes

```javascript
startJavaTracer(['android.app.Activity', 'android.view.View'], function() {
    console.log(this.$className, this.method);
});
```

___

## startNativeTracer

Start the native tracer on the current thread

```javascript
startNativeTracer(function() {
    log('===============');
    log(this.instruction);
    log(this.context);
    log('===============');
    if (shouldStopTracer) {
        this.stop();
    }
});
```

___

## stopJavaTracer

Stop the java tracer

```javascript
stopJavaTracer();
```

___

## strace

start syscall tracing

strace(function() {
    console.log(this.context.x0);
    if (1 === 1) {
        this.stop();
    }
});

___

## writeBytes

Write the given hex string or ArrayBuffer into the given address

```javascript
writeBytes(0x1234, 'aabbccddeeff');
```
