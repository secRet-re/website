---
id: dwarf
title: Dwarf
sidebar_label: Dwarf
---


## backtrace

▸ **backtrace**(`context?`: CpuContext): *DebugSymbol[] | null*


Shortcut to retrieve native backtrace

**Parameters:**

Name | Type |
------ | ------ |
`context?` | CpuContext |

**Returns:** *DebugSymbol[] | null*

___

## enumerateExports

▸ **enumerateExports**(`module`: any): *Array‹ModuleExportDetails›*


Enumerate exports for the given module name or pointer

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`module` | any | an hex/int address or string name  |

**Returns:** *Array‹ModuleExportDetails›*

___

## enumerateImports

▸ **enumerateImports**(`module`: any): *Array‹ModuleExportDetails›*


Enumerate imports for the given module name or pointer

**Parameters:**

Name | Type |
------ | ------ |
`module` | any |

**Returns:** *Array‹ModuleExportDetails›*

___

## enumerateJavaClasses

▸ **enumerateJavaClasses**(`useCache?`: any): *void*


Enumerate java classes

**Parameters:**

Name | Type |
------ | ------ |
`useCache?` | any |

**Returns:** *void*

___

## enumerateJavaMethods

▸ **enumerateJavaMethods**(`className`: string): *void*


Enumerate method for the given class name

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |

**Returns:** *void*

___

## enumerateModuleInfo

▸ **enumerateModuleInfo**(`fridaModule`: Module | string): *Module*


Enumerate all information about the module (imports / exports / symbols)

**Parameters:**

Name | Type |
------ | ------ |
`fridaModule` | Module &#124; string |

**Returns:** *Module*

___

## enumerateModules

▸ **enumerateModules**(`fillInformation?`: boolean): *Module‹›[]*


Enumerate loaded modules

**Parameters:**

Name | Type |
------ | ------ |
`fillInformation?` | boolean |

**Returns:** *Module‹›[]*

___

## enumerateObjCClasses

▸ **enumerateObjCClasses**(`moduleName`: string): *void*


Enumerate ObjC classes in the given module

**Parameters:**

Name | Type |
------ | ------ |
`moduleName` | string |

**Returns:** *void*

___

## enumerateObjCMethods

▸ **enumerateObjCMethods**(`className`: string): *void*


Enumerate ObjC methods for the given class

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |

**Returns:** *void*

___

## enumerateObjCModules

▸ **enumerateObjCModules**(): *void*


Enumerate modules for ObjC inspector panel

**Returns:** *void*

___

## enumerateRanges

▸ **enumerateRanges**(): *RangeDetails[]*


Enumerate all mapped ranges

**Returns:** *RangeDetails[]*

___

## enumerateSymbols

▸ **enumerateSymbols**(`module`: any): *Array‹ModuleSymbolDetails›*


Enumerate symbols for the given module name or pointer

**Parameters:**

Name | Type |
------ | ------ |
`module` | any |

**Returns:** *Array‹ModuleSymbolDetails›*

___

## evaluate

▸ **evaluate**(`jsCode`: string): *any*


Evaluate javascript. Used from the UI to inject javascript code into the process

**Parameters:**

Name | Type |
------ | ------ |
`jsCode` | string |

**Returns:** *any*

___

## evaluateFunction

▸ **evaluateFunction**(`jsFnc`: string): *any*


Evaluate javascript. Used from the UI to inject javascript code into the process

**Parameters:**

Name | Type |
------ | ------ |
`jsFnc` | string |

**Returns:** *any*

___

## evaluatePtr

▸ **evaluatePtr**(`pointer`: any): *NativePointer*


Evaluate any input and return a NativePointer

**Parameters:**

Name | Type |
------ | ------ |
`pointer` | any |

**Returns:** *NativePointer*

___

## findExport

▸ **findExport**(`name`: any, `module?`: any): *NativePointer | null*


Shortcut to quickly retrieve an export

```javascript
const openAddress = findExport('open');
const myTargetAddress = findExport('target_func', 'target_module.so');
```

**Parameters:**

Name | Type |
------ | ------ |
`name` | any |
`module?` | any |

**Returns:** *NativePointer | null*

___

## findModule

▸ **findModule**(`module`: any): *Module | Module[] | null*


Find a module providing any argument. Could be a string/int pointer or module name

**Parameters:**

Name | Type |
------ | ------ |
`module` | any |

**Returns:** *Module | Module[] | null*

___

## findSymbol

▸ **findSymbol**(`pattern`: any): *NativePointer‹›[]*


Find a symbol matching the given pattern

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | any |

**Returns:** *NativePointer‹›[]*

___

## getAddressTs

▸ **getAddressTs**(`p`: any): *any[]*


get telescope information for the given pointer argument

**Parameters:**

Name | Type |
------ | ------ |
`p` | any |

**Returns:** *any[]*

___

## getDebugSymbols

▸ **getDebugSymbols**(`ptrs`: any): *DebugSymbol[]*


Return an array of DebugSymbol for the requested pointers

**Parameters:**

Name | Type |
------ | ------ |
`ptrs` | any |

**Returns:** *DebugSymbol[]*

___

## getInstruction

▸ **getInstruction**(`address`: any): *string*


Shortcut to retrieve an Instruction object for the given address

**Parameters:**

Name | Type |
------ | ------ |
`address` | any |

**Returns:** *string*

___

## getRange

▸ **getRange**(`address`: any): *RangeDetails | null*


Return a RangeDetails object or null for the requested pointer

**Parameters:**

Name | Type |
------ | ------ |
`address` | any |

**Returns:** *RangeDetails | null*

___

## getSymbolByAddress

▸ **getSymbolByAddress**(`pt`: any): *DebugSymbol | null*


Return DebugSymbol or null for the given pointer

**Parameters:**

Name | Type |
------ | ------ |
`pt` | any |

**Returns:** *DebugSymbol | null*

___

## hookAllJavaMethods

▸ **hookAllJavaMethods**(`className`: string, `callback`: Function): *boolean*


Hook all the methods for the given java class

```javascript
hookAllJavaMethods('android.app.Activity', function() {
    console.log('hello from:', this.className, this.method);
})
```

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |
`callback` | Function |

**Returns:** *boolean*

___

## hookClassLoaderClassInitialization

▸ **hookClassLoaderClassInitialization**(`className`: string, `callback`: Function): *boolean*


Receive a callback whenever a java class is going to be loaded by the class loader.

```javascript
hookClassLoaderClassInitialization('com.target.classname', function() {
    console.log('target is being loaded');
})
```

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |
`callback` | Function |

**Returns:** *boolean*

___

## hookJavaConstructor

▸ **hookJavaConstructor**(`className`: string, `callback`: Function): *boolean*


Hook the constructor of the given java class
```javascript
hookJavaConstructor('android.app.Activity', function() {
    console.log('activity created');
})
```

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |
`callback` | Function |

**Returns:** *boolean*

___

## hookJavaMethod

▸ **hookJavaMethod**(`targetClassMethod`: string, `callback`: Function): *boolean*


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

**Parameters:**

Name | Type |
------ | ------ |
`targetClassMethod` | string |
`callback` | Function |

**Returns:** *boolean*

___

## hookModuleInitialization

▸ **hookModuleInitialization**(`moduleName`: string, `callback`: Function): *boolean*


Receive a callback when the native module is being loaded
```javascript
hookModuleInitialization('libtarget.so', function() {
    console.log('libtarget is being loaded');
});
```

**Parameters:**

Name | Type |
------ | ------ |
`moduleName` | string |
`callback` | Function |

**Returns:** *boolean*

___

## injectBlob

▸ **injectBlob**(`name`: string, `blob`: string): *number | false | true | NativePointer‹› | UInt64‹› | Int64‹› | any[]*


Map the given blob as hex string using memfd:create with the given name

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`blob` | string |

**Returns:** *number | false | true | NativePointer‹› | UInt64‹› | Int64‹› | any[]*

a negative integer if error or fd

___

## isAddressWatched

▸ **isAddressWatched**(`pt`: any): *boolean*


**Parameters:**

Name | Type |
------ | ------ |
`pt` | any |

**Returns:** *boolean*

a boolean indicating if the given pointer is currently watched

___

## javaBacktrace

▸ **javaBacktrace**(): *any*


**Returns:** *any*

a java stack trace. Must be executed in JVM thread

___

## jvmExplorer

▸ **jvmExplorer**(`handle`: any): *object*


**Parameters:**

Name | Type |
------ | ------ |
`handle` | any |

**Returns:** *object*

the explorer object for the given java handle

___

## log

▸ **log**(`what`: any): *void*


log whatever to Dwarf console

**Parameters:**

Name | Type |
------ | ------ |
`what` | any |

**Returns:** *void*

___

## putBreakpoint

▸ **putBreakpoint**(`address_or_class`: any, `condition?`: string | Function): *boolean*


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

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address_or_class` | any | - |
`condition?` | string &#124; Function |   |

**Returns:** *boolean*

___

## putJavaClassInitializationBreakpoint

▸ **putJavaClassInitializationBreakpoint**(`className`: string): *boolean*


Put a java class initialization breakpoint

```javascript
putJavaClassInitializationBreakpoint('android.app.Activity');
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`className` | string |   |

**Returns:** *boolean*

___

## putModuleInitializationBreakpoint

▸ **putModuleInitializationBreakpoint**(`moduleName`: string): *boolean*


Put a native module initialization breakpoint

```javascript
putModuleInitializationBreakpoint('libtarget.so');
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`moduleName` | string |   |

**Returns:** *boolean*

___

## putWatchpoint

▸ **putWatchpoint**(`address`: any, `flags`: string | number, `callback?`: Function): *Watchpoint‹›*


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

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | any | - |
`flags` | string &#124; number | - |
`callback?` | Function |   |

**Returns:** *Watchpoint‹›*

___

## readBytes

▸ **readBytes**(`address`: any, `length`: any): *any[] | ArrayBuffer*


A shortcut for safely reading from memory

**Parameters:**

Name | Type |
------ | ------ |
`address` | any |
`length` | any |

**Returns:** *any[] | ArrayBuffer*

an ArrayBuffer of the given length filled with data starting from target address

___

## readPointer

▸ **readPointer**(`pt`: any): *NativePointer‹›*


**Parameters:**

Name | Type |
------ | ------ |
`pt` | any |

**Returns:** *NativePointer‹›*

a pointer from the given address

___

## readString

▸ **readString**(`address`: any, `length?`: any): *string*


A shortcut and secure way to read a string from a pointer with frida on any os

**Parameters:**

Name | Type |
------ | ------ |
`address` | any |
`length?` | any |

**Returns:** *string*

the string pointed by address until termination or optional length

___

## releaseFromJs

▸ **releaseFromJs**(`tid`: any): *void*


resume the execution of the given thread id

**Parameters:**

Name | Type |
------ | ------ |
`tid` | any |

**Returns:** *void*

___

## removeBreakpoint

▸ **removeBreakpoint**(`address_or_class`: any): *boolean*


Remove a breakpoint on address_or_class

**Parameters:**

Name | Type |
------ | ------ |
`address_or_class` | any |

**Returns:** *boolean*

a boolean indicating if removal was successful

___

## removeJavaClassInitializationBreakpoint

▸ **removeJavaClassInitializationBreakpoint**(`moduleName`: string): *boolean*


Remove a java class initialization breakpoint on moduleName

**Parameters:**

Name | Type |
------ | ------ |
`moduleName` | string |

**Returns:** *boolean*

a boolean indicating if removal was successful

___

## removeModuleInitializationBreakpoint

▸ **removeModuleInitializationBreakpoint**(`moduleName`: string): *boolean*


Remove a module initialization breakpoint on moduleName

**Parameters:**

Name | Type |
------ | ------ |
`moduleName` | string |

**Returns:** *boolean*

a boolean indicating if removal was successful

___

## removeWatchpoint

▸ **removeWatchpoint**(`address`: any): *boolean*


Remove a watchpoint on the given address

**Parameters:**

Name | Type |
------ | ------ |
`address` | any |

**Returns:** *boolean*

a boolean indicating if removal was successful

___

## restart

▸ **restart**(): *boolean*


Restart the application

Android only

**Returns:** *boolean*

___

## setData

▸ **setData**(`key`: any, `data`: any): *void*


Send whatever to the data panel

```javascript
var sendCount = 0;
Interceptor.attach(findExport('send'), function() {
    setData(sendCount + '', this.context.x1.readByteArray(parseInt(this.context.x2)))
    sendCount++;
});
```

**Parameters:**

Name | Type |
------ | ------ |
`key` | any |
`data` | any |

**Returns:** *void*

___

## startJavaTracer

▸ **startJavaTracer**(`classes`: string[], `callback`: Function | object): *boolean*


Start the java tracer on the given classes

**Parameters:**

Name | Type |
------ | ------ |
`classes` | string[] |
`callback` | Function &#124; object |

**Returns:** *boolean*

___

## startNativeTracer

▸ **startNativeTracer**(`callback`: any): *boolean*


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

**Parameters:**

Name | Type |
------ | ------ |
`callback` | any |

**Returns:** *boolean*

___

## stopJavaTracer

▸ **stopJavaTracer**(): *boolean*


Stop the java tracer

**Returns:** *boolean*

___

## strace

▸ **strace**(`callback`: any): *boolean*


start syscall tracing

strace(function() {
    console.log(this.context.x0);
    if (1 === 1) {
        this.stop();
    }
});

**Parameters:**

Name | Type |
------ | ------ |
`callback` | any |

**Returns:** *boolean*

___

## writeBytes

▸ **writeBytes**(`address`: any, `what`: string | ArrayBuffer): *boolean*


Write the given hex string or ArrayBuffer into the given address

**Parameters:**

Name | Type |
------ | ------ |
`address` | any |
`what` | string &#124; ArrayBuffer |

**Returns:** *boolean*
