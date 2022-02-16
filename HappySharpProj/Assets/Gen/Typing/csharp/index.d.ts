   
declare module 'csharp' {
    import * as CSharp from 'csharp';
    export default CSharp;
}
declare module 'csharp' {
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    type $Task<T> = System.Threading.Tasks.Task$1<T>
    namespace System.IO {
        class DirectoryInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable
        {
            public get Parent(): System.IO.DirectoryInfo;
            public get Root(): System.IO.DirectoryInfo;
            public CreateSubdirectory ($path: string) : System.IO.DirectoryInfo
            public Create () : void
            public GetFiles () : System.Array$1<System.IO.FileInfo>
            public GetFiles ($searchPattern: string) : System.Array$1<System.IO.FileInfo>
            public GetFiles ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<System.IO.FileInfo>
            public GetFiles ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Array$1<System.IO.FileInfo>
            public GetFileSystemInfos () : System.Array$1<System.IO.FileSystemInfo>
            public GetFileSystemInfos ($searchPattern: string) : System.Array$1<System.IO.FileSystemInfo>
            public GetFileSystemInfos ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<System.IO.FileSystemInfo>
            public GetFileSystemInfos ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Array$1<System.IO.FileSystemInfo>
            public GetDirectories () : System.Array$1<System.IO.DirectoryInfo>
            public GetDirectories ($searchPattern: string) : System.Array$1<System.IO.DirectoryInfo>
            public GetDirectories ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Array$1<System.IO.DirectoryInfo>
            public GetDirectories ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Array$1<System.IO.DirectoryInfo>
            public EnumerateDirectories () : System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>
            public EnumerateDirectories ($searchPattern: string) : System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>
            public EnumerateDirectories ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>
            public EnumerateDirectories ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Collections.Generic.IEnumerable$1<System.IO.DirectoryInfo>
            public EnumerateFiles () : System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>
            public EnumerateFiles ($searchPattern: string) : System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>
            public EnumerateFiles ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>
            public EnumerateFiles ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Collections.Generic.IEnumerable$1<System.IO.FileInfo>
            public EnumerateFileSystemInfos () : System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>
            public EnumerateFileSystemInfos ($searchPattern: string) : System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>
            public EnumerateFileSystemInfos ($searchPattern: string, $searchOption: System.IO.SearchOption) : System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>
            public EnumerateFileSystemInfos ($searchPattern: string, $enumerationOptions: System.IO.EnumerationOptions) : System.Collections.Generic.IEnumerable$1<System.IO.FileSystemInfo>
            public MoveTo ($destDirName: string) : void
            public Delete () : void
            public Delete ($recursive: boolean) : void
            public Create ($directorySecurity: System.Security.AccessControl.DirectorySecurity) : void
            public CreateSubdirectory ($path: string, $directorySecurity: System.Security.AccessControl.DirectorySecurity) : System.IO.DirectoryInfo
            public GetAccessControl () : System.Security.AccessControl.DirectorySecurity
            public GetAccessControl ($includeSections: System.Security.AccessControl.AccessControlSections) : System.Security.AccessControl.DirectorySecurity
            public SetAccessControl ($directorySecurity: System.Security.AccessControl.DirectorySecurity) : void
            public constructor ($path: string)
        }
        class FileSystemInfo extends System.MarshalByRefObject implements System.Runtime.Serialization.ISerializable
        {
            public get Attributes(): System.IO.FileAttributes;
            public set Attributes(value: System.IO.FileAttributes);
            public get FullName(): string;
            public get Extension(): string;
            public get Name(): string;
            public get Exists(): boolean;
            public get CreationTime(): Date;
            public set CreationTime(value: Date);
            public get CreationTimeUtc(): Date;
            public set CreationTimeUtc(value: Date);
            public get LastAccessTime(): Date;
            public set LastAccessTime(value: Date);
            public get LastAccessTimeUtc(): Date;
            public set LastAccessTimeUtc(value: Date);
            public get LastWriteTime(): Date;
            public set LastWriteTime(value: Date);
            public get LastWriteTimeUtc(): Date;
            public set LastWriteTimeUtc(value: Date);
            public Refresh () : void
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public Delete () : void
        }
        class FileInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable
        {
            public get Length(): bigint;
            public get DirectoryName(): string;
            public get Directory(): System.IO.DirectoryInfo;
            public get IsReadOnly(): boolean;
            public set IsReadOnly(value: boolean);
            public get Name(): string;
            public OpenText () : System.IO.StreamReader
            public CreateText () : System.IO.StreamWriter
            public AppendText () : System.IO.StreamWriter
            public CopyTo ($destFileName: string) : System.IO.FileInfo
            public CopyTo ($destFileName: string, $overwrite: boolean) : System.IO.FileInfo
            public Create () : System.IO.FileStream
            public Open ($mode: System.IO.FileMode) : System.IO.FileStream
            public Open ($mode: System.IO.FileMode, $access: System.IO.FileAccess) : System.IO.FileStream
            public Open ($mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare) : System.IO.FileStream
            public OpenRead () : System.IO.FileStream
            public OpenWrite () : System.IO.FileStream
            public MoveTo ($destFileName: string) : void
            public Replace ($destinationFileName: string, $destinationBackupFileName: string) : System.IO.FileInfo
            public Replace ($destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean) : System.IO.FileInfo
            public Decrypt () : void
            public Encrypt () : void
            public GetAccessControl () : System.Security.AccessControl.FileSecurity
            public GetAccessControl ($includeSections: System.Security.AccessControl.AccessControlSections) : System.Security.AccessControl.FileSecurity
            public SetAccessControl ($fileSecurity: System.Security.AccessControl.FileSecurity) : void
            public constructor ($fileName: string)
        }
        enum SearchOption
        { TopDirectoryOnly = 0, AllDirectories = 1 }
        class EnumerationOptions extends System.Object
        {
        }
        class File extends System.Object
        {
            public static OpenText ($path: string) : System.IO.StreamReader
            public static CreateText ($path: string) : System.IO.StreamWriter
            public static AppendText ($path: string) : System.IO.StreamWriter
            public static Copy ($sourceFileName: string, $destFileName: string) : void
            public static Copy ($sourceFileName: string, $destFileName: string, $overwrite: boolean) : void
            public static Create ($path: string) : System.IO.FileStream
            public static Create ($path: string, $bufferSize: number) : System.IO.FileStream
            public static Create ($path: string, $bufferSize: number, $options: System.IO.FileOptions) : System.IO.FileStream
            public static Delete ($path: string) : void
            public static Exists ($path: string) : boolean
            public static Open ($path: string, $mode: System.IO.FileMode) : System.IO.FileStream
            public static Open ($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess) : System.IO.FileStream
            public static Open ($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare) : System.IO.FileStream
            public static SetCreationTime ($path: string, $creationTime: Date) : void
            public static SetCreationTimeUtc ($path: string, $creationTimeUtc: Date) : void
            public static GetCreationTime ($path: string) : Date
            public static GetCreationTimeUtc ($path: string) : Date
            public static SetLastAccessTime ($path: string, $lastAccessTime: Date) : void
            public static SetLastAccessTimeUtc ($path: string, $lastAccessTimeUtc: Date) : void
            public static GetLastAccessTime ($path: string) : Date
            public static GetLastAccessTimeUtc ($path: string) : Date
            public static SetLastWriteTime ($path: string, $lastWriteTime: Date) : void
            public static SetLastWriteTimeUtc ($path: string, $lastWriteTimeUtc: Date) : void
            public static GetLastWriteTime ($path: string) : Date
            public static GetLastWriteTimeUtc ($path: string) : Date
            public static GetAttributes ($path: string) : System.IO.FileAttributes
            public static SetAttributes ($path: string, $fileAttributes: System.IO.FileAttributes) : void
            public static OpenRead ($path: string) : System.IO.FileStream
            public static OpenWrite ($path: string) : System.IO.FileStream
            public static ReadAllText ($path: string) : string
            public static ReadAllText ($path: string, $encoding: System.Text.Encoding) : string
            public static WriteAllText ($path: string, $contents: string) : void
            public static WriteAllText ($path: string, $contents: string, $encoding: System.Text.Encoding) : void
            public static ReadAllBytes ($path: string) : System.Array$1<number>
            public static WriteAllBytes ($path: string, $bytes: System.Array$1<number>) : void
            public static ReadAllLines ($path: string) : System.Array$1<string>
            public static ReadAllLines ($path: string, $encoding: System.Text.Encoding) : System.Array$1<string>
            public static ReadLines ($path: string) : System.Collections.Generic.IEnumerable$1<string>
            public static ReadLines ($path: string, $encoding: System.Text.Encoding) : System.Collections.Generic.IEnumerable$1<string>
            public static WriteAllLines ($path: string, $contents: System.Array$1<string>) : void
            public static WriteAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>) : void
            public static WriteAllLines ($path: string, $contents: System.Array$1<string>, $encoding: System.Text.Encoding) : void
            public static WriteAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding) : void
            public static AppendAllText ($path: string, $contents: string) : void
            public static AppendAllText ($path: string, $contents: string, $encoding: System.Text.Encoding) : void
            public static AppendAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>) : void
            public static AppendAllLines ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding) : void
            public static Replace ($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string) : void
            public static Replace ($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean) : void
            public static Move ($sourceFileName: string, $destFileName: string) : void
            public static Encrypt ($path: string) : void
            public static Decrypt ($path: string) : void
            public static ReadAllTextAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<string>
            public static ReadAllTextAsync ($path: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<string>
            public static WriteAllTextAsync ($path: string, $contents: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static WriteAllTextAsync ($path: string, $contents: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static ReadAllBytesAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<System.Array$1<number>>
            public static WriteAllBytesAsync ($path: string, $bytes: System.Array$1<number>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static ReadAllLinesAsync ($path: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<System.Array$1<string>>
            public static ReadAllLinesAsync ($path: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task$1<System.Array$1<string>>
            public static WriteAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static WriteAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllTextAsync ($path: string, $contents: string, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllTextAsync ($path: string, $contents: string, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static AppendAllLinesAsync ($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding, $cancellationToken?: System.Threading.CancellationToken) : System.Threading.Tasks.Task
            public static Create ($path: string, $bufferSize: number, $options: System.IO.FileOptions, $fileSecurity: System.Security.AccessControl.FileSecurity) : System.IO.FileStream
            public static GetAccessControl ($path: string) : System.Security.AccessControl.FileSecurity
            public static GetAccessControl ($path: string, $includeSections: System.Security.AccessControl.AccessControlSections) : System.Security.AccessControl.FileSecurity
            public static SetAccessControl ($path: string, $fileSecurity: System.Security.AccessControl.FileSecurity) : void
        }
        class StreamReader extends System.IO.TextReader implements System.IDisposable
        {
        }
        class TextReader extends System.MarshalByRefObject implements System.IDisposable
        {
        }
        class StreamWriter extends System.IO.TextWriter implements System.IAsyncDisposable, System.IDisposable
        {
            public static Null : System.IO.StreamWriter
            public get AutoFlush(): boolean;
            public set AutoFlush(value: boolean);
            public get BaseStream(): System.IO.Stream;
            public get Encoding(): System.Text.Encoding;
            public constructor ($stream: System.IO.Stream)
            public constructor ($stream: System.IO.Stream, $encoding: System.Text.Encoding)
            public constructor ($stream: System.IO.Stream, $encoding: System.Text.Encoding, $bufferSize: number)
            public constructor ($stream: System.IO.Stream, $encoding: System.Text.Encoding, $bufferSize: number, $leaveOpen: boolean)
            public constructor ($path: string)
            public constructor ($path: string, $append: boolean)
            public constructor ($path: string, $append: boolean, $encoding: System.Text.Encoding)
            public constructor ($path: string, $append: boolean, $encoding: System.Text.Encoding, $bufferSize: number)
        }
        class TextWriter extends System.MarshalByRefObject implements System.IAsyncDisposable, System.IDisposable
        {
        }
        class FileStream extends System.IO.Stream implements System.IAsyncDisposable, System.IDisposable
        {
        }
        class Stream extends System.MarshalByRefObject implements System.IAsyncDisposable, System.IDisposable
        {
        }
        enum FileOptions
        { None = 0, WriteThrough = -2147483648, Asynchronous = 1073741824, RandomAccess = 268435456, DeleteOnClose = 67108864, SequentialScan = 134217728, Encrypted = 16384 }
        enum FileMode
        { CreateNew = 1, Create = 2, Open = 3, OpenOrCreate = 4, Truncate = 5, Append = 6 }
        enum FileAccess
        { Read = 1, Write = 2, ReadWrite = 3 }
        enum FileShare
        { None = 0, Read = 1, Write = 2, ReadWrite = 3, Delete = 4, Inheritable = 16 }
        enum FileAttributes
        { ReadOnly = 1, Hidden = 2, System = 4, Directory = 16, Archive = 32, Device = 64, Normal = 128, Temporary = 256, SparseFile = 512, ReparsePoint = 1024, Compressed = 2048, Offline = 4096, NotContentIndexed = 8192, Encrypted = 16384, IntegrityStream = 32768, NoScrubData = 131072 }
    }
    namespace System {
        class MarshalByRefObject extends System.Object
        {
        }
        class Object
        {
        }
        class String extends System.Object implements System.ICloneable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable, System.IEquatable$1<string>
        {
        }
        interface ICloneable
        {
        }
        interface IComparable
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IConvertible
        {
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
        }
        class ValueType extends System.Object
        {
        }
        interface IEquatable$1<T>
        {
        }
        class Void extends System.ValueType
        {
        }
        class Array extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.ICloneable, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IList
        {
        }
        class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
        {
        }
        interface IFormattable
        {
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>
        {
        }
        interface IDisposable
        {
        }
        interface IAsyncDisposable
        {
        }
        class Int32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
        }
        interface ISpanFormattable
        {
        }
        class DateTime extends System.ValueType implements System.IFormattable, System.Runtime.Serialization.ISerializable, System.ISpanFormattable, System.IComparable, System.IComparable$1<Date>, System.IConvertible, System.IEquatable$1<Date>
        {
        }
        class Byte extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
        }
        interface IAsyncResult
        {
        }
        interface Action$1<T>
        { (obj: T) : void; }
        interface MulticastDelegate
        { (...args:any[]) : any; }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        class Delegate extends System.Object implements System.Runtime.Serialization.ISerializable, System.ICloneable
        {
        }
        class Type extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect
        {
        }
        class Int64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
        {
        }
        class UInt32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
        }
        class UInt16 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
        }
        class UInt64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
        {
        }
        interface Action
        { () : void; }
        var Action: { new (func: () => void): Action; }
        class ReadOnlySpan$1<T> extends System.ValueType
        {
        }
        class ReadOnlyMemory$1<T> extends System.ValueType implements System.IEquatable$1<System.ReadOnlyMemory$1<T>>
        {
        }
        class Single extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
        }
        interface Func$1<TResult>
        { () : TResult; }
        class Environment extends System.Object
        {
            public static get CommandLine(): string;
            public static get CurrentDirectory(): string;
            public static set CurrentDirectory(value: string);
            public static get CurrentManagedThreadId(): number;
            public static get ExitCode(): number;
            public static set ExitCode(value: number);
            public static get HasShutdownStarted(): boolean;
            public static get MachineName(): string;
            public static get NewLine(): string;
            public static get OSVersion(): System.OperatingSystem;
            public static get StackTrace(): string;
            public static get SystemDirectory(): string;
            public static get TickCount(): number;
            public static get UserDomainName(): string;
            public static get UserInteractive(): boolean;
            public static get UserName(): string;
            public static get Version(): System.Version;
            public static get WorkingSet(): bigint;
            public static get Is64BitOperatingSystem(): boolean;
            public static get SystemPageSize(): number;
            public static get Is64BitProcess(): boolean;
            public static get ProcessorCount(): number;
            public static Exit ($exitCode: number) : void
            public static ExpandEnvironmentVariables ($name: string) : string
            public static GetCommandLineArgs () : System.Array$1<string>
            public static GetEnvironmentVariable ($variable: string) : string
            public static GetEnvironmentVariables () : System.Collections.IDictionary
            public static GetFolderPath ($folder: System.Environment.SpecialFolder) : string
            public static GetFolderPath ($folder: System.Environment.SpecialFolder, $option: System.Environment.SpecialFolderOption) : string
            public static GetLogicalDrives () : System.Array$1<string>
            public static GetEnvironmentVariable ($variable: string, $target: System.EnvironmentVariableTarget) : string
            public static GetEnvironmentVariables ($target: System.EnvironmentVariableTarget) : System.Collections.IDictionary
            public static SetEnvironmentVariable ($variable: string, $value: string) : void
            public static SetEnvironmentVariable ($variable: string, $value: string, $target: System.EnvironmentVariableTarget) : void
            public static FailFast ($message: string) : void
            public static FailFast ($message: string, $exception: System.Exception) : void
        }
        class OperatingSystem extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
        {
        }
        class Version extends System.Object implements System.ICloneable, System.ISpanFormattable, System.IComparable, System.IComparable$1<System.Version>, System.IEquatable$1<System.Version>
        {
        }
        enum EnvironmentVariableTarget
        { Process = 0, User = 1, Machine = 2 }
        class Exception extends System.Object implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
        }
        interface IFormatProvider
        {
        }
    }
    namespace System.Runtime.Serialization {
        interface ISerializable
        {
        }
        interface IDeserializationCallback
        {
        }
        class SerializationInfo extends System.Object
        {
        }
        class StreamingContext extends System.ValueType
        {
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
        {
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
        {
        }
        class Dictionary$2<TKey, TValue> extends System.Object implements System.Runtime.Serialization.IDeserializationCallback, System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.IDictionary, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        class KeyValuePair$2<TKey, TValue> extends System.ValueType
        {
        }
        interface IDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
    }
    namespace System.Collections {
        interface IEnumerable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        interface IDictionary extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
    }
    namespace System.Security.AccessControl {
        class DirectorySecurity extends System.Security.AccessControl.FileSystemSecurity
        {
        }
        class FileSystemSecurity extends System.Security.AccessControl.NativeObjectSecurity
        {
        }
        class NativeObjectSecurity extends System.Security.AccessControl.CommonObjectSecurity
        {
        }
        class CommonObjectSecurity extends System.Security.AccessControl.ObjectSecurity
        {
        }
        class ObjectSecurity extends System.Object
        {
        }
        enum AccessControlSections
        { None = 0, Audit = 1, Access = 2, Owner = 4, Group = 8, All = 15 }
        class FileSecurity extends System.Security.AccessControl.FileSystemSecurity
        {
        }
    }
    namespace System.Text {
        class Encoding extends System.Object implements System.ICloneable
        {
        }
    }
    namespace System.Threading.Tasks {
        class Task$1<TResult> extends System.Threading.Tasks.Task implements System.IAsyncResult, System.Threading.IThreadPoolWorkItem, System.IDisposable
        {
        }
        class Task extends System.Object implements System.IAsyncResult, System.Threading.IThreadPoolWorkItem, System.IDisposable
        {
        }
        class ValueTask extends System.ValueType implements System.IEquatable$1<System.Threading.Tasks.ValueTask>
        {
        }
    }
    namespace System.Threading {
        interface IThreadPoolWorkItem
        {
        }
        class CancellationToken extends System.ValueType
        {
        }
    }
    namespace UnityEditor {
        /** An Interface for accessing assets and performing operations on assets. */
        class AssetDatabase extends System.Object
        {
        /** Callback raised whenever a package import successfully completes that lists the items selected to be imported. */
            public static onImportPackageItemsCompleted : System.Action$1<System.Array$1<string>>/** Changes during Refresh if anything has changed that can invalidate any artifact. */
            public static get GlobalArtifactDependencyVersion(): number;
            /** Changes whenever a new artifact is added to the artifact database. */
            public static get GlobalArtifactProcessedVersion(): number;
            /** Gets the refresh import mode currently in use by the asset database. */
            public static get ActiveRefreshImportMode(): UnityEditor.AssetDatabase.RefreshImportMode;
            public static set ActiveRefreshImportMode(value: UnityEditor.AssetDatabase.RefreshImportMode);
            /** The desired number of processes to use when importing assets, during an asset database refresh. */
            public static get DesiredWorkerCount(): number;
            public static set DesiredWorkerCount(value: number);
            public static add_importPackageStarted ($value: UnityEditor.AssetDatabase.ImportPackageCallback) : void
            public static remove_importPackageStarted ($value: UnityEditor.AssetDatabase.ImportPackageCallback) : void
            public static add_importPackageCompleted ($value: UnityEditor.AssetDatabase.ImportPackageCallback) : void
            public static remove_importPackageCompleted ($value: UnityEditor.AssetDatabase.ImportPackageCallback) : void
            public static add_importPackageCancelled ($value: UnityEditor.AssetDatabase.ImportPackageCallback) : void
            public static remove_importPackageCancelled ($value: UnityEditor.AssetDatabase.ImportPackageCallback) : void
            public static add_importPackageFailed ($value: UnityEditor.AssetDatabase.ImportPackageFailedCallback) : void
            public static remove_importPackageFailed ($value: UnityEditor.AssetDatabase.ImportPackageFailedCallback) : void
            public static CanOpenForEdit ($assetOrMetaFilePaths: System.Array$1<string>, $outNotEditablePaths: System.Collections.Generic.List$1<string>, $statusQueryOptions?: UnityEditor.StatusQueryOptions) : void
            public static IsOpenForEdit ($assetOrMetaFilePaths: System.Array$1<string>, $outNotEditablePaths: System.Collections.Generic.List$1<string>, $statusQueryOptions?: UnityEditor.StatusQueryOptions) : void
            /** Makes a file open for editing in version control.
            * @param path Specifies the path to a file relative to the project root.
            * @returns true if Unity successfully made the file editable in the version control system. Otherwise, returns false. 
            */
            public static MakeEditable ($path: string) : boolean
            public static MakeEditable ($paths: System.Array$1<string>, $prompt?: string, $outNotEditablePaths?: System.Collections.Generic.List$1<string>) : boolean
            /** Search the asset database using the search filter string.
            * @param filter The filter string can contain search data.  See below for details about this string.
            * @param searchInFolders The folders where the search will start.
            * @returns Array of matching asset. Note that GUIDs will be returned. If no matching assets were found, returns empty array. 
            */
            public static FindAssets ($filter: string) : System.Array$1<string>
            /** Search the asset database using the search filter string.
            * @param filter The filter string can contain search data.  See below for details about this string.
            * @param searchInFolders The folders where the search will start.
            * @returns Array of matching asset. Note that GUIDs will be returned. If no matching assets were found, returns empty array. 
            */
            public static FindAssets ($filter: string, $searchInFolders: System.Array$1<string>) : System.Array$1<string>
            /** Is object an asset? */
            public static Contains ($obj: UnityEngine.Object) : boolean
            /** Is object an asset? */
            public static Contains ($instanceID: number) : boolean
            /** Creates a new folder, in the specified parent folder.
            The parent folder string must start with the "Assets" folder, and all folders within the parent folder string must already exist. For example, when specifying "AssetsParentFolder1Parentfolder2/", the new folder will be created in "ParentFolder2" only if ParentFolder1 and ParentFolder2 already exist.
            * @param parentFolder The path to the parent folder. Must start with "Assets/".
            * @param newFolderName The name of the new folder.
            * @returns The GUID of the newly created folder, if the folder was created successfully. Otherwise returns an empty string. 
            */
            public static CreateFolder ($parentFolder: string, $newFolderName: string) : string
            /** Is asset a main asset in the project window? */
            public static IsMainAsset ($obj: UnityEngine.Object) : boolean
            /** Is asset a main asset in the project window? */
            public static IsMainAsset ($instanceID: number) : boolean
            /** Does the asset form part of another asset? * @param obj The asset Object to query.
            * @param instanceID Instance ID of the asset Object to query.
            */
            public static IsSubAsset ($obj: UnityEngine.Object) : boolean
            /** Does the asset form part of another asset? * @param obj The asset Object to query.
            * @param instanceID Instance ID of the asset Object to query.
            */
            public static IsSubAsset ($instanceID: number) : boolean
            /** Determines whether the Asset is a foreign Asset. */
            public static IsForeignAsset ($obj: UnityEngine.Object) : boolean
            /** Determines whether the Asset is a foreign Asset. */
            public static IsForeignAsset ($instanceID: number) : boolean
            /** Determines whether the Asset is a native Asset. */
            public static IsNativeAsset ($obj: UnityEngine.Object) : boolean
            /** Determines whether the Asset is a native Asset. */
            public static IsNativeAsset ($instanceID: number) : boolean
            public static GetCurrentCacheServerIp () : string
            /** Creates a new unique path for an asset. */
            public static GenerateUniqueAssetPath ($path: string) : string
            public static StartAssetEditing () : void
            public static StopAssetEditing () : void
            public static ReleaseCachedFileHandles () : void
            /** Checks if an asset file can be moved from one folder to another. (Without actually moving the file).
            * @param oldPath The path where the asset currently resides.
            * @param newPath The path which the asset should be moved to.
            * @returns An empty string if the asset can be moved, otherwise an error message. 
            */
            public static ValidateMoveAsset ($oldPath: string, $newPath: string) : string
            /** Move an asset file (or folder) from one folder to another.
            * @param oldPath The path where the asset currently resides.
            * @param newPath The path which the asset should be moved to.
            * @returns An empty string if the asset has been successfully moved, otherwise an error message. 
            */
            public static MoveAsset ($oldPath: string, $newPath: string) : string
            /** Creates an external Asset from an object (such as a Material) by extracting it from within an imported asset (such as an FBX file).
            * @param asset The sub-asset to extract.
            * @param newPath The file path of the new Asset.
            * @returns An empty string if Unity has successfully extracted the Asset, or an error message if not. 
            */
            public static ExtractAsset ($asset: UnityEngine.Object, $newPath: string) : string
            /** Rename an asset file.
            * @param pathName The path where the asset currently resides.
            * @param newName The new name which should be given to the asset.
            * @returns An empty string, if the asset has been successfully renamed, otherwise an error message. 
            */
            public static RenameAsset ($pathName: string, $newName: string) : string
            /** Moves the specified asset  or folder to the OS trash.
            * @param path Project relative path of the asset or folder to be deleted.
            * @returns Returns true if the asset has been successfully removed, false if it doesn't exist or couldn't be removed. 
            */
            public static MoveAssetToTrash ($path: string) : boolean
            public static MoveAssetsToTrash ($paths: System.Array$1<string>, $outFailedPaths: System.Collections.Generic.List$1<string>) : boolean
            /** Deletes the specified asset or folder.
            * @param path Project relative path of the asset or folder to be deleted.
            * @returns Returns true if the asset has been successfully removed, false if it doesn't exist or couldn't be removed. 
            */
            public static DeleteAsset ($path: string) : boolean
            public static DeleteAssets ($paths: System.Array$1<string>, $outFailedPaths: System.Collections.Generic.List$1<string>) : boolean
            /** Import asset at path. */
            public static ImportAsset ($path: string) : void
            /** Import asset at path. */
            public static ImportAsset ($path: string, $options: UnityEditor.ImportAssetOptions) : void
            /** Duplicates the asset at path and stores it at newPath.
            * @param path Filesystem path of the source asset.
            * @param newPath Filesystem path of the new asset to create.
            * @returns Returns true if the copy operation is successful or false if part of the process fails. 
            */
            public static CopyAsset ($path: string, $newPath: string) : boolean
            /** Writes the import settings to disk. */
            public static WriteImportSettingsIfDirty ($path: string) : boolean
            /** Given a path to a directory in the Assets folder, relative to the project folder, this method will return an array of all its subdirectories. */
            public static GetSubFolders ($path: string) : System.Array$1<string>
            /** Given a path to a folder, returns true if it exists, false otherwise.
            * @param path The path to the folder.
            * @returns Returns true if the folder exists. 
            */
            public static IsValidFolder ($path: string) : boolean
            /** Creates a new native Unity asset. * @param asset Object to use in creating the asset.
            * @param path Filesystem path for the new asset.
            */
            public static CreateAsset ($asset: UnityEngine.Object, $path: string) : void
            /** Adds objectToAdd to an existing asset at path. * @param objectToAdd Object to add to the existing asset.
            * @param path Filesystem path to the asset.
            */
            public static AddObjectToAsset ($objectToAdd: UnityEngine.Object, $path: string) : void
            /** Adds objectToAdd to an existing asset identified by assetObject. */
            public static AddObjectToAsset ($objectToAdd: UnityEngine.Object, $assetObject: UnityEngine.Object) : void
            /** Specifies which object in the asset file should become the main object after the next import. * @param mainObject The object to become the main object.
            * @param assetPath Path to the asset file.
            */
            public static SetMainObject ($mainObject: UnityEngine.Object, $assetPath: string) : void
            /** Returns the path name relative to the project folder where the asset is stored.
            * @param instanceID The instance ID of the asset.
            * @param assetObject A reference to the asset.
            * @returns The asset path name, or null, or an empty string if the asset does not exist. 
            */
            public static GetAssetPath ($assetObject: UnityEngine.Object) : string
            /** Returns the path name relative to the project folder where the asset is stored.
            * @param instanceID The instance ID of the asset.
            * @param assetObject A reference to the asset.
            * @returns The asset path name, or null, or an empty string if the asset does not exist. 
            */
            public static GetAssetPath ($instanceID: number) : string
            /** Returns the path name relative to the project folder where the asset is stored. */
            public static GetAssetOrScenePath ($assetObject: UnityEngine.Object) : string
            /** Gets the path to the text .meta file associated with an asset.
            * @param path The path to the asset.
            * @returns The path to the .meta text file or an empty string if the file does not exist. 
            */
            public static GetTextMetaFilePathFromAssetPath ($path: string) : string
            /** Gets the path to the asset file associated with a text .meta file. */
            public static GetAssetPathFromTextMetaFilePath ($path: string) : string
            /** Returns the first asset object of type type at given path assetPath.
            * @param assetPath Path of the asset to load.
            * @param type Data type of the asset.
            * @returns The asset matching the parameters. 
            */
            public static LoadAssetAtPath ($assetPath: string, $type: System.Type) : UnityEngine.Object
            /** Returns the main asset object at assetPath.
            The "main" Asset is the Asset at the root of a hierarchy (such as a Maya file which may contain multiples meshes and GameObjects). * @param assetPath Filesystem path of the asset to load.
            */
            public static LoadMainAssetAtPath ($assetPath: string) : UnityEngine.Object
            /** Returns the type of the main asset object at assetPath. * @param assetPath Filesystem path of the asset to load.
            */
            public static GetMainAssetTypeAtPath ($assetPath: string) : System.Type
            /** Gets an object's type from an Asset path and a local file identifier.
            * @param assetPath The Asset's path.
            * @param localIdentifierInFile The object's local file identifier.
            * @returns The object's type. 
            */
            public static GetTypeFromPathAndFileID ($assetPath: string, $localIdentifierInFile: bigint) : System.Type
            /** Returns true if the main asset object at assetPath is loaded in memory. * @param assetPath Filesystem path of the asset to load.
            */
            public static IsMainAssetAtPathLoaded ($assetPath: string) : boolean
            /** Returns all sub Assets at assetPath. */
            public static LoadAllAssetRepresentationsAtPath ($assetPath: string) : System.Array$1<UnityEngine.Object>
            /** Returns an array of all Assets at assetPath. * @param assetPath Filesystem path to the asset.
            */
            public static LoadAllAssetsAtPath ($assetPath: string) : System.Array$1<UnityEngine.Object>
            public static GetAllAssetPaths () : System.Array$1<string>
            /** Import any changed assets. */
            public static Refresh () : void
            /** Import any changed assets. */
            public static Refresh ($options: UnityEditor.ImportAssetOptions) : void
            /** Checks if Unity can open an asset in the Editor.
            * @param instanceID The instance ID of the asset.
            * @returns Returns true if Unity can successfully open the asset in the Editor, otherwise returns false. 
            */
            public static CanOpenAssetInEditor ($instanceID: number) : boolean
            /** Opens the asset with associated application. */
            public static OpenAsset ($instanceID: number) : boolean
            /** Opens the asset with associated application. */
            public static OpenAsset ($instanceID: number, $lineNumber: number) : boolean
            /** Opens the asset with associated application. */
            public static OpenAsset ($instanceID: number, $lineNumber: number, $columnNumber: number) : boolean
            /** Opens the asset with associated application. */
            public static OpenAsset ($target: UnityEngine.Object) : boolean
            /** Opens the asset with associated application. */
            public static OpenAsset ($target: UnityEngine.Object, $lineNumber: number) : boolean
            /** Opens the asset with associated application. */
            public static OpenAsset ($target: UnityEngine.Object, $lineNumber: number, $columnNumber: number) : boolean
            /** Opens the asset(s) with associated application(s). */
            public static OpenAsset ($objects: System.Array$1<UnityEngine.Object>) : boolean
            /** Gets the corresponding asset path for the supplied GUID, or an empty string if the GUID can't be found.
            * @param guid The GUID of an asset.
            * @returns Path of the asset relative to the project folder. 
            */
            public static GUIDToAssetPath ($guid: string) : string
            /** Gets the corresponding asset path for the supplied GUID, or an empty string if the GUID can't be found.
            * @param guid The GUID of an asset.
            * @returns Path of the asset relative to the project folder. 
            */
            public static GUIDToAssetPath ($guid: UnityEditor.GUID) : string
            /** Get the GUID for the asset at path.
            * @param path Filesystem path for the asset. All paths are relative to the project folder.
            * @returns The GUID of the asset. An all-zero GUID denotes an invalid asset path. 
            */
            public static GUIDFromAssetPath ($path: string) : UnityEditor.GUID
            /** Get the GUID for the asset at path.
            * @param path Filesystem path for the asset.
            * @param options Specifies whether this method should return a GUID for recently deleted assets. The default value is AssetPathToGUIDOptions.IncludeRecentlyDeletedAssets.
            * @returns GUID. 
            */
            public static AssetPathToGUID ($path: string) : string
            /** Get the GUID for the asset at path.
            * @param path Filesystem path for the asset.
            * @param options Specifies whether this method should return a GUID for recently deleted assets. The default value is AssetPathToGUIDOptions.IncludeRecentlyDeletedAssets.
            * @returns GUID. 
            */
            public static AssetPathToGUID ($path: string, $options: UnityEditor.AssetPathToGUIDOptions) : string
            /** Returns the hash of all the dependencies of an asset.
            * @param path Path to the asset.
            * @param guid GUID of the asset.
            * @returns Aggregate hash. 
            */
            public static GetAssetDependencyHash ($guid: UnityEditor.GUID) : UnityEngine.Hash128
            /** Returns the hash of all the dependencies of an asset.
            * @param path Path to the asset.
            * @param guid GUID of the asset.
            * @returns Aggregate hash. 
            */
            public static GetAssetDependencyHash ($path: string) : UnityEngine.Hash128
            public static SaveAssets () : void
            /** Writes all unsaved changes to the specified asset to disk. * @param obj The asset object to be saved, if dirty.
            * @param guid The guid of the asset to be saved, if dirty.
            */
            public static SaveAssetIfDirty ($guid: UnityEditor.GUID) : void
            /** Writes all unsaved changes to the specified asset to disk. * @param obj The asset object to be saved, if dirty.
            * @param guid The guid of the asset to be saved, if dirty.
            */
            public static SaveAssetIfDirty ($obj: UnityEngine.Object) : void
            /** Retrieves an icon for the asset at the given asset path. */
            public static GetCachedIcon ($path: string) : UnityEngine.Texture
            /** Replaces that list of labels on an asset. */
            public static SetLabels ($obj: UnityEngine.Object, $labels: System.Array$1<string>) : void
            public static GetLabels ($guid: UnityEditor.GUID) : System.Array$1<string>
            /** Returns all labels attached to a given asset. */
            public static GetLabels ($obj: UnityEngine.Object) : System.Array$1<string>
            /** Removes all labels attached to an asset. */
            public static ClearLabels ($obj: UnityEngine.Object) : void
            public static GetAllAssetBundleNames () : System.Array$1<string>
            public static GetUnusedAssetBundleNames () : System.Array$1<string>
            /** Remove the assetBundle name from the asset database. The forceRemove flag is used to indicate if you want to remove it even it's in use. * @param assetBundleName The assetBundle name you want to remove.
            * @param forceRemove Flag to indicate if you want to remove the assetBundle name even it's in use.
            */
            public static RemoveAssetBundleName ($assetBundleName: string, $forceRemove: boolean) : boolean
            public static RemoveUnusedAssetBundleNames () : void
            /** Returns an array containing the paths of all assets marked with the specified Asset Bundle name. */
            public static GetAssetPathsFromAssetBundle ($assetBundleName: string) : System.Array$1<string>
            /** Get the Asset paths for all Assets tagged with assetBundleName and
            named assetName. */
            public static GetAssetPathsFromAssetBundleAndAssetName ($assetBundleName: string, $assetName: string) : System.Array$1<string>
            /** Returns the name of the AssetBundle that a given asset belongs to.
            * @param assetPath The asset's path.
            * @returns Returns the name of the AssetBundle that a given asset belongs to. See the method description for more details. 
            */
            public static GetImplicitAssetBundleName ($assetPath: string) : string
            /** Returns the name of the AssetBundle Variant that a given asset belongs to.
            * @param assetPath The asset's path.
            * @returns Returns the name of the AssetBundle Variant that a given asset belongs to. See the method description for more details. 
            */
            public static GetImplicitAssetBundleVariantName ($assetPath: string) : string
            /** Given an assetBundleName, returns the list of AssetBundles that it depends on.
            * @param assetBundleName The name of the AssetBundle for which dependencies are required.
            * @param recursive If false, returns only AssetBundles which are direct dependencies of the input; if true, includes all indirect dependencies of the input.
            * @returns The names of all AssetBundles that the input depends on. 
            */
            public static GetAssetBundleDependencies ($assetBundleName: string, $recursive: boolean) : System.Array$1<string>
            /** Returns an array of all the assets that are dependencies of the asset at the specified pathName.
            Note: GetDependencies() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  GetDependencies() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.
            * @param pathName The path to the asset for which dependencies are required.
            * @param recursive Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false).
            * @returns The paths of all assets that the input depends on. 
            */
            public static GetDependencies ($pathName: string) : System.Array$1<string>
            /** Returns an array of all the assets that are dependencies of the asset at the specified pathName.
            Note: GetDependencies() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  GetDependencies() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.
            * @param pathName The path to the asset for which dependencies are required.
            * @param recursive Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false).
            * @returns The paths of all assets that the input depends on. 
            */
            public static GetDependencies ($pathName: string, $recursive: boolean) : System.Array$1<string>
            /** Returns an array of the paths of assets that are dependencies of all the assets in the list of pathNames that you provide.
            Note: GetDependencies() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  GetDependencies() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.
            * @param pathNames The path to the assets for which dependencies are required.
            * @param recursive Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false).
            * @returns The paths of all assets that the input depends on. 
            */
            public static GetDependencies ($pathNames: System.Array$1<string>) : System.Array$1<string>
            /** Returns an array of the paths of assets that are dependencies of all the assets in the list of pathNames that you provide.
            Note: GetDependencies() gets the Assets that are referenced by other Assets. For example, a Scene could contain many GameObjects with a Material attached to them. In this case,  GetDependencies() will return the path to the Material Assets, but not the GameObjects as those are not Assets on your disk.
            * @param pathNames The path to the assets for which dependencies are required.
            * @param recursive Controls whether this method recursively checks and returns all dependencies including indirect dependencies (when set to true), or whether it only returns direct dependencies (when set to false).
            * @returns The paths of all assets that the input depends on. 
            */
            public static GetDependencies ($pathNames: System.Array$1<string>, $recursive: boolean) : System.Array$1<string>
            /** Exports the assets identified by assetPathNames to a unitypackage file in fileName. */
            public static ExportPackage ($assetPathName: string, $fileName: string) : void
            /** Exports the assets identified by assetPathNames to a unitypackage file in fileName. */
            public static ExportPackage ($assetPathName: string, $fileName: string, $flags: UnityEditor.ExportPackageOptions) : void
            /** Exports the assets identified by assetPathNames to a unitypackage file in fileName. */
            public static ExportPackage ($assetPathNames: System.Array$1<string>, $fileName: string) : void
            /** Exports the assets identified by assetPathNames to a unitypackage file in fileName. */
            public static ExportPackage ($assetPathNames: System.Array$1<string>, $fileName: string, $flags: UnityEditor.ExportPackageOptions) : void
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being available for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered available for edit by the selected version control system. 
            */
            public static CanOpenForEdit ($assetObject: UnityEngine.Object) : boolean
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being available for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered available for edit by the selected version control system. 
            */
            public static CanOpenForEdit ($assetObject: UnityEngine.Object, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being available for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered available for edit by the selected version control system. 
            */
            public static CanOpenForEdit ($assetOrMetaFilePath: string) : boolean
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being available for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered available for edit by the selected version control system. 
            */
            public static CanOpenForEdit ($assetOrMetaFilePath: string, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being available for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered available for edit by the selected version control system. 
            */
            public static CanOpenForEdit ($assetObject: UnityEngine.Object, $message: $Ref<string>) : boolean
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being available for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered available for edit by the selected version control system. 
            */
            public static CanOpenForEdit ($assetObject: UnityEngine.Object, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being available for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered available for edit by the selected version control system. 
            */
            public static CanOpenForEdit ($assetOrMetaFilePath: string, $message: $Ref<string>) : boolean
            /** Query whether an Asset file can be opened for editing in version control and is not exclusively locked by another user or otherwise unavailable.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being available for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered available for edit by the selected version control system. 
            */
            public static CanOpenForEdit ($assetOrMetaFilePath: string, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            /** Query whether an Asset file is open for editing in version control.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered open for edit by the selected version control system. 
            */
            public static IsOpenForEdit ($assetObject: UnityEngine.Object) : boolean
            /** Query whether an Asset file is open for editing in version control.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered open for edit by the selected version control system. 
            */
            public static IsOpenForEdit ($assetObject: UnityEngine.Object, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            /** Query whether an Asset file is open for editing in version control.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered open for edit by the selected version control system. 
            */
            public static IsOpenForEdit ($assetOrMetaFilePath: string) : boolean
            /** Query whether an Asset file is open for editing in version control.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered open for edit by the selected version control system. 
            */
            public static IsOpenForEdit ($assetOrMetaFilePath: string, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            /** Query whether an Asset file is open for editing in version control.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered open for edit by the selected version control system. 
            */
            public static IsOpenForEdit ($assetObject: UnityEngine.Object, $message: $Ref<string>) : boolean
            /** Query whether an Asset file is open for editing in version control.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered open for edit by the selected version control system. 
            */
            public static IsOpenForEdit ($assetObject: UnityEngine.Object, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            /** Query whether an Asset file is open for editing in version control.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered open for edit by the selected version control system. 
            */
            public static IsOpenForEdit ($assetOrMetaFilePath: string, $message: $Ref<string>) : boolean
            /** Query whether an Asset file is open for editing in version control.
            * @param assetObject Object representing the asset whose status you wish to query.
            * @param assetOrMetaFilePath Path to the asset file or its .meta file on disk, relative to project folder.
            * @param message Returns a reason for the asset not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset is considered open for edit by the selected version control system. 
            */
            public static IsOpenForEdit ($assetOrMetaFilePath: string, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            /** Query whether an asset's metadata (.meta) file is open for edit in version control.
            * @param assetObject Object representing the asset whose metadata status you wish to query.
            * @param message Returns a reason for the asset metadata not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset's metadata is considered open for edit by the selected version control system. 
            */
            public static IsMetaFileOpenForEdit ($assetObject: UnityEngine.Object) : boolean
            /** Query whether an asset's metadata (.meta) file is open for edit in version control.
            * @param assetObject Object representing the asset whose metadata status you wish to query.
            * @param message Returns a reason for the asset metadata not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset's metadata is considered open for edit by the selected version control system. 
            */
            public static IsMetaFileOpenForEdit ($assetObject: UnityEngine.Object, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            /** Query whether an asset's metadata (.meta) file is open for edit in version control.
            * @param assetObject Object representing the asset whose metadata status you wish to query.
            * @param message Returns a reason for the asset metadata not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset's metadata is considered open for edit by the selected version control system. 
            */
            public static IsMetaFileOpenForEdit ($assetObject: UnityEngine.Object, $message: $Ref<string>) : boolean
            /** Query whether an asset's metadata (.meta) file is open for edit in version control.
            * @param assetObject Object representing the asset whose metadata status you wish to query.
            * @param message Returns a reason for the asset metadata not being open for edit.
            * @param statusOptions Options for how the version control system should be queried. These options can effect the speed and accuracy of the query. Default is StatusQueryOptions.UseCachedIfPossible.
            * @returns True if the asset's metadata is considered open for edit by the selected version control system. 
            */
            public static IsMetaFileOpenForEdit ($assetObject: UnityEngine.Object, $message: $Ref<string>, $statusOptions: UnityEditor.StatusQueryOptions) : boolean
            public static GetBuiltinExtraResource ($type: System.Type, $path: string) : UnityEngine.Object
            public static ForceReserializeAssets ($assetPaths: System.Collections.Generic.IEnumerable$1<string>, $options?: UnityEditor.ForceReserializeAssetsOptions) : void
            /** Get the GUID and local file id from an object instance id.
            * @param instanceID InstanceID of the object to retrieve information for.
            * @param obj The object to retrieve GUID and File Id for.
            * @param assetRef The asset reference to retrieve GUID and File Id for.
            * @param guid The GUID of an asset.
            * @param localId The local file identifier of this asset.
            * @returns True if the guid and file id were successfully found, false if not. 
            */
            public static TryGetGUIDAndLocalFileIdentifier ($obj: UnityEngine.Object, $guid: $Ref<string>, $localId: $Ref<bigint>) : boolean
            /** Get the GUID and local file id from an object instance id.
            * @param instanceID InstanceID of the object to retrieve information for.
            * @param obj The object to retrieve GUID and File Id for.
            * @param assetRef The asset reference to retrieve GUID and File Id for.
            * @param guid The GUID of an asset.
            * @param localId The local file identifier of this asset.
            * @returns True if the guid and file id were successfully found, false if not. 
            */
            public static TryGetGUIDAndLocalFileIdentifier ($instanceID: number, $guid: $Ref<string>, $localId: $Ref<bigint>) : boolean
            public static ForceReserializeAssets () : void
            /** Removes object from its asset (See Also: AssetDatabase.AddObjectToAsset). */
            public static RemoveObjectFromAsset ($objectToRemove: UnityEngine.Object) : void
            /** Imports package at packagePath into the current project. */
            public static ImportPackage ($packagePath: string, $interactive: boolean) : void
            public static DisallowAutoRefresh () : void
            public static AllowAutoRefresh () : void
            /** Clears the importer override for the asset. * @param path Asset path.
            */
            public static ClearImporterOverride ($path: string) : void
            public static IsCacheServerEnabled () : boolean
            /** Returns the type of the override importer.
            * @param path Asset path.
            * @returns Importer type. 
            */
            public static GetImporterOverride ($path: string) : System.Type
            /** Gets the importer types associated with a given Asset type.
            * @param path The Asset path.
            * @returns Returns an array of importer types that can handle the specified Asset. 
            */
            public static GetAvailableImporterTypes ($path: string) : System.Array$1<System.Type>
            /** Checks the availability of the Cache Server.
            * @param ip The IP address of the Cache Server.
            * @param port The Port number of the Cache Server.
            * @returns Returns true when Editor can connect to the Cache Server. Returns false otherwise. 
            */
            public static CanConnectToCacheServer ($ip: string, $port: number) : boolean
            public static RefreshSettings () : void
            public static add_cacheServerConnectionChanged ($value: System.Action$1<UnityEditor.CacheServerConnectionChangedParameters>) : void
            public static remove_cacheServerConnectionChanged ($value: System.Action$1<UnityEditor.CacheServerConnectionChangedParameters>) : void
            public static IsConnectedToCacheServer () : boolean
            public static ResetCacheServerReconnectTimer () : void
            public static CloseCacheServerConnection () : void
            public static GetCacheServerAddress () : string
            public static GetCacheServerPort () : number
            public static GetCacheServerNamespacePrefix () : string
            public static GetCacheServerEnableDownload () : boolean
            public static GetCacheServerEnableUpload () : boolean
            public static IsDirectoryMonitoringEnabled () : boolean
            /** Allows you to register a custom dependency that Assets can be dependent on. If you register a custom dependency, and specify that an Asset is dependent on it, then the Asset will get re-imported if the custom dependency changes. * @param dependency Name of dependency. You can use any name you like, but because these names are global across all your Assets, it can be useful to use a naming convention (eg a path-based naming system) to avoid clashes with other custom dependency names.
            * @param hashOfValue A Hash128 value of the dependency.
            */
            public static RegisterCustomDependency ($dependency: string, $hashOfValue: UnityEngine.Hash128) : void
            /** Removes custom dependencies that match the prefixFilter.
            * @param prefixFilter Prefix filter for the custom dependencies to unregister.
            * @returns Number of custom dependencies removed. 
            */
            public static UnregisterCustomDependencyPrefixFilter ($prefixFilter: string) : number
            public static IsAssetImportWorkerProcess () : boolean
            public static ForceToDesiredWorkerCount () : void
            public constructor ()
        }
        /** Options for querying the version control system status of a file. */
        enum StatusQueryOptions
        { ForceUpdate = 0, UseCachedIfPossible = 1, UseCachedAsync = 2 }
        /** Asset importing options. */
        enum ImportAssetOptions
        { Default = 0, ForceUpdate = 1, ForceSynchronousImport = 8, ImportRecursive = 256, DontDownloadFromCacheServer = 8192, ForceUncompressedImport = 16384 }
        class GUID extends System.ValueType implements System.IComparable, System.IComparable$1<UnityEditor.GUID>, System.IEquatable$1<UnityEditor.GUID>
        {
        }
        /** Asset path to GUID options. */
        enum AssetPathToGUIDOptions
        { IncludeRecentlyDeletedAssets = 0, OnlyExistingAssets = 1 }
        /** Export package option. Multiple options can be combined together using the | operator. */
        enum ExportPackageOptions
        { Default = 0, Interactive = 1, Recurse = 2, IncludeDependencies = 4, IncludeLibraryAssets = 8 }
        /** Options for AssetDatabase.ForceReserializeAssets. */
        enum ForceReserializeAssetsOptions
        { ReserializeAssets = 1, ReserializeMetadata = 2, ReserializeAssetsAndMetadata = 3 }
        /** Struct used for AssetDatabase.cacheServerConnectionChanged. */
        class CacheServerConnectionChangedParameters extends System.ValueType
        {
        }
        /** Base class from which asset importers for specific asset types derive. */
        class AssetImporter extends UnityEngine.Object
        {
        /** The path name of the asset for this importer. (Read Only) */
            public get assetPath(): string;
            /** The value is true when no meta file is provided with the imported asset. */
            public get importSettingsMissing(): boolean;
            public get assetTimeStamp(): bigint;
            /** Get or set any user data. */
            public get userData(): string;
            public set userData(value: string);
            /** Get or set the AssetBundle name. */
            public get assetBundleName(): string;
            public set assetBundleName(value: string);
            /** Get or set the AssetBundle variant. */
            public get assetBundleVariant(): string;
            public set assetBundleVariant(value: string);
            /** Set the AssetBundle name and variant. * @param assetBundleName AssetBundle name.
            * @param assetBundleVariant AssetBundle variant.
            */
            public SetAssetBundleNameAndVariant ($assetBundleName: string, $assetBundleVariant: string) : void
            /** Retrieves the asset importer for the asset at path. */
            public static GetAtPath ($path: string) : UnityEditor.AssetImporter
            public SaveAndReimport () : void
            public AddRemap ($identifier: UnityEditor.AssetImporter.SourceAssetIdentifier, $externalObject: UnityEngine.Object) : void
            public RemoveRemap ($identifier: UnityEditor.AssetImporter.SourceAssetIdentifier) : boolean
            public GetExternalObjectMap () : System.Collections.Generic.Dictionary$2<UnityEditor.AssetImporter.SourceAssetIdentifier, UnityEngine.Object>
            /** Checks if the AssetImporter supports remapping the given asset type.
            * @param type The type of asset to check.
            * @returns Returns true if the importer supports remapping the given type. Otherwise, returns false. 
            */
            public SupportsRemappedAssetType ($type: System.Type) : boolean
            public constructor ()
        }
        /** AssetBundle building map entry. */
        class AssetBundleBuild extends System.ValueType
        {
        /** AssetBundle name. */
            public assetBundleName : string/** AssetBundle variant. */
            public assetBundleVariant : string/** Asset names which belong to the given AssetBundle. */
            public assetNames : System.Array$1<string>/** Addressable name used to load an asset. */
            public addressableNames : System.Array$1<string>
        }
        /** Lets you programmatically build players or AssetBundles which can be loaded from the web. */
        class BuildPipeline extends System.Object
        {
        /** Is a player currently being built? */
            public static get isBuildingPlayer(): boolean;
            public static GetBuildTargetGroup ($platform: UnityEditor.BuildTarget) : UnityEditor.BuildTargetGroup
            /** Given a BuildTarget will return the well known string representation for the build target platform.
            * @param targetPlatform An instance of the BuildTarget enum.
            * @returns Target platform name represented by the passed in BuildTarget. 
            */
            public static GetBuildTargetName ($targetPlatform: UnityEditor.BuildTarget) : string
            /** Checks if Unity can append the build.
            * @param target The BuildTarget to build.
            * @param location The path where Unity builds the application.
            * @returns Returns a UnityEditor.CanAppendBuild enum that indicates whether Unity can append the build. 
            */
            public static BuildCanBeAppended ($target: UnityEditor.BuildTarget, $location: string) : UnityEditor.CanAppendBuild
            /** Builds a player. These overloads are still supported, but will be replaced. Please use BuildPlayer (BuildPlayerOptions buildPlayerOptions)  instead.
            * @param scenes The Scenes to include in the build. If empty, the build only includes the currently open Scene. Paths are relative to the project folder (AssetsMyLevelsMyScene.unity).
            * @param locationPathName The path where the application will be built.
            * @param target The BuildTarget to build.
            * @param options Additional BuildOptions, like whether to run the built player.
            * @returns An error message if an error occurred. 
            */
            public static BuildPlayer ($levels: System.Array$1<UnityEditor.EditorBuildSettingsScene>, $locationPathName: string, $target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions) : UnityEditor.Build.Reporting.BuildReport
            /** Builds a player. These overloads are still supported, but will be replaced. Please use BuildPlayer (BuildPlayerOptions buildPlayerOptions)  instead.
            * @param scenes The Scenes to include in the build. If empty, the build only includes the currently open Scene. Paths are relative to the project folder (AssetsMyLevelsMyScene.unity).
            * @param locationPathName The path where the application will be built.
            * @param target The BuildTarget to build.
            * @param options Additional BuildOptions, like whether to run the built player.
            * @returns An error message if an error occurred. 
            */
            public static BuildPlayer ($levels: System.Array$1<string>, $locationPathName: string, $target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions) : UnityEditor.Build.Reporting.BuildReport
            /** Builds a player.
            * @param buildPlayerOptions Provide various options to control the behavior of BuildPipeline.BuildPlayer.
            * @returns A BuildReport giving build process information. 
            */
            public static BuildPlayer ($buildPlayerOptions: UnityEditor.BuildPlayerOptions) : UnityEditor.Build.Reporting.BuildReport
            /** Writes out a "boot.config" file that contains configuration information for the very early stages of engine startup. * @param outputFile The location to write the file to.
            * @param target The platform to target for this build.
            * @param options Options for this build.
            */
            public static WriteBootConfig ($outputFile: string, $target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions) : void
            /** Build all AssetBundles specified in the editor.
            * @param outputPath Output path for the AssetBundles.
            * @param assetBundleOptions AssetBundle building options.
            * @param targetPlatform Chosen target build platform.
            * @returns The manifest listing all AssetBundles included in this build. 
            */
            public static BuildAssetBundles ($outputPath: string, $assetBundleOptions: UnityEditor.BuildAssetBundleOptions, $targetPlatform: UnityEditor.BuildTarget) : UnityEngine.AssetBundleManifest
            /** Build AssetBundles from a building map.
            * @param outputPath Output path for the AssetBundles.
            * @param builds AssetBundle building map.
            * @param assetBundleOptions AssetBundle building options.
            * @param targetPlatform Target build platform.
            * @returns The manifest listing all AssetBundles included in this build. 
            */
            public static BuildAssetBundles ($outputPath: string, $builds: System.Array$1<UnityEditor.AssetBundleBuild>, $assetBundleOptions: UnityEditor.BuildAssetBundleOptions, $targetPlatform: UnityEditor.BuildTarget) : UnityEngine.AssetBundleManifest
            /** Extract the crc checksum for the given AssetBundle. */
            public static GetCRCForAssetBundle ($targetPath: string, $crc: $Ref<number>) : boolean
            /** Extract the hash for the given AssetBundle. */
            public static GetHashForAssetBundle ($targetPath: string, $hash: $Ref<UnityEngine.Hash128>) : boolean
            /** Returns true if the specified build target is currently available in the Editor. * @param buildTargetGroup build target group
            * @param target build target
            */
            public static IsBuildTargetSupported ($buildTargetGroup: UnityEditor.BuildTargetGroup, $target: UnityEditor.BuildTarget) : boolean
            /** Returns the path of a player directory. For ex., Editor\Data\PlaybackEngines\AndroidPlayer.
            In some cases the player directory path can be affected by BuildOptions.Development. * @param target Build target.
            * @param options Build options.
            * @param buildTargetGroup Build target group.
            */
            public static GetPlaybackEngineDirectory ($target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions) : string
            public static GetPlaybackEngineDirectory ($target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions, $assertUnsupportedPlatforms: boolean) : string
            /** Returns the path of a player directory. For ex., Editor\Data\PlaybackEngines\AndroidPlayer.
            In some cases the player directory path can be affected by BuildOptions.Development. * @param target Build target.
            * @param options Build options.
            * @param buildTargetGroup Build target group.
            */
            public static GetPlaybackEngineDirectory ($buildTargetGroup: UnityEditor.BuildTargetGroup, $target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions) : string
            public static GetPlaybackEngineDirectory ($buildTargetGroup: UnityEditor.BuildTargetGroup, $target: UnityEditor.BuildTarget, $options: UnityEditor.BuildOptions, $assertUnsupportedPlatforms: boolean) : string
            /** Returns the mode currently used by players to initiate a connect to the host. */
            public static GetPlayerConnectionInitiateMode ($targetPlatform: UnityEditor.BuildTarget, $buildOptions: UnityEditor.BuildOptions) : UnityEditor.PlayerConnectionInitiateMode
            public constructor ()
        }
        /** Build target group. */
        enum BuildTargetGroup
        { Unknown = 0, Standalone = 1, WebPlayer = 2, iPhone = 4, iOS = 4, PS3 = 5, XBOX360 = 6, Android = 7, WebGL = 13, WSA = 14, Metro = 14, WP8 = 15, BlackBerry = 16, Tizen = 17, PSP2 = 18, PS4 = 19, PSM = 20, XboxOne = 21, SamsungTV = 22, N3DS = 23, WiiU = 24, tvOS = 25, Facebook = 26, Switch = 27, Lumin = 28, Stadia = 29, CloudRendering = 30, GameCoreScarlett = 31, GameCoreXboxSeries = 31, GameCoreXboxOne = 32, PS5 = 33, EmbeddedLinux = 34 }
        /** Target build platform. */
        enum BuildTarget
        { StandaloneOSX = 2, StandaloneOSXUniversal = 3, StandaloneOSXIntel = 4, StandaloneWindows = 5, WebPlayer = 6, WebPlayerStreamed = 7, iOS = 9, PS3 = 10, XBOX360 = 11, Android = 13, StandaloneLinux = 17, StandaloneWindows64 = 19, WebGL = 20, WSAPlayer = 21, StandaloneLinux64 = 24, StandaloneLinuxUniversal = 25, WP8Player = 26, StandaloneOSXIntel64 = 27, BlackBerry = 28, Tizen = 29, PSP2 = 30, PS4 = 31, PSM = 32, XboxOne = 33, SamsungTV = 34, N3DS = 35, WiiU = 36, tvOS = 37, Switch = 38, Lumin = 39, Stadia = 40, CloudRendering = 41, GameCoreScarlett = 42, GameCoreXboxSeries = 42, GameCoreXboxOne = 43, PS5 = 44, EmbeddedLinux = 45, iPhone = -1, BB10 = -1, MetroPlayer = -1, NoTarget = -2 }
        /** Whether you can append an existing build using BuildOptions.AcceptExternalModificationsToPlayer. */
        enum CanAppendBuild
        { Unsupported = 0, Yes = 1, No = 2 }
        /** This class is used for entries in the Scenes list, as displayed in the window. This class contains the Scene path of a Scene and an enabled flag that indicates wether the Scene is enabled in the BuildSettings window or not.
        You can use this class in combination with EditorBuildSettings.scenes to populate the list of Scenes included in the build via script. This is useful when creating custom editor scripts to automate your build pipeline.
        See EditorBuildSettings.scenes for an example script. */
        class EditorBuildSettingsScene extends System.Object implements System.IComparable
        {
        }
        /** Building options. Multiple options can be combined together. */
        enum BuildOptions
        { None = 0, Development = 1, AutoRunPlayer = 4, ShowBuiltPlayer = 8, BuildAdditionalStreamedScenes = 16, AcceptExternalModificationsToPlayer = 32, InstallInBuildFolder = 64, CleanBuildCache = 128, ConnectWithProfiler = 256, AllowDebugging = 512, SymlinkLibraries = 1024, SymlinkSources = 1024, UncompressedAssetBundle = 2048, StripDebugSymbols = 0, CompressTextures = 0, ConnectToHost = 4096, CustomConnectionID = 8192, EnableHeadlessMode = 16384, BuildScriptsOnly = 32768, PatchPackage = 65536, Il2CPP = 0, ForceEnableAssertions = 131072, CompressWithLz4 = 262144, CompressWithLz4HC = 524288, ForceOptimizeScriptCompilation = 0, ComputeCRC = 1048576, StrictMode = 2097152, IncludeTestAssemblies = 4194304, NoUniqueIdentifier = 8388608, WaitForPlayerConnection = 33554432, EnableCodeCoverage = 67108864, EnableDeepProfilingSupport = 268435456, DetailedBuildReport = 536870912, ShaderLivelinkSupport = 1073741824 }
        /** Provide various options to control the behavior of BuildPipeline.BuildPlayer. */
        class BuildPlayerOptions extends System.ValueType
        {
        }
        /** Asset Bundle building options. */
        enum BuildAssetBundleOptions
        { None = 0, UncompressedAssetBundle = 1, CollectDependencies = 2, CompleteAssets = 4, DisableWriteTypeTree = 8, DeterministicAssetBundle = 16, ForceRebuildAssetBundle = 32, IgnoreTypeTreeChanges = 64, AppendHashToAssetBundleName = 128, ChunkBasedCompression = 256, StrictMode = 512, DryRunBuild = 1024, DisableLoadAssetByFileName = 4096, DisableLoadAssetByFileNameWithExtension = 8192, AssetBundleStripUnityVersion = 32768 }
        /** Describes how the player connects to the Editor. */
        enum PlayerConnectionInitiateMode
        { None = 0, PlayerConnectsToHost = 1, PlayerListens = 2 }
        /** User build settings for the Editor */
        class EditorUserBuildSettings extends UnityEngine.Object
        {
        /** The currently selected build target group. */
            public static get selectedBuildTargetGroup(): UnityEditor.BuildTargetGroup;
            public static set selectedBuildTargetGroup(value: UnityEditor.BuildTargetGroup);
            public static get selectedEmbeddedLinuxArchitecture(): UnityEditor.EmbeddedLinuxArchitecture;
            public static set selectedEmbeddedLinuxArchitecture(value: UnityEditor.EmbeddedLinuxArchitecture);
            /** The currently selected target for a standalone build. */
            public static get selectedStandaloneTarget(): UnityEditor.BuildTarget;
            public static set selectedStandaloneTarget(value: UnityEditor.BuildTarget);
            /** Desktop standalone build subtarget. */
            public static get standaloneBuildSubtarget(): UnityEditor.StandaloneBuildSubtarget;
            public static set standaloneBuildSubtarget(value: UnityEditor.StandaloneBuildSubtarget);
            /** PS4 Build Subtarget. */
            public static get ps4BuildSubtarget(): UnityEditor.PS4BuildSubtarget;
            public static set ps4BuildSubtarget(value: UnityEditor.PS4BuildSubtarget);
            /** Specifies which version of PS4 hardware to target. */
            public static get ps4HardwareTarget(): UnityEditor.PS4HardwareTarget;
            public static set ps4HardwareTarget(value: UnityEditor.PS4HardwareTarget);
            /** Are null references actively validated? */
            public static get explicitNullChecks(): boolean;
            public static set explicitNullChecks(value: boolean);
            /** Are divide by zero's actively validated? */
            public static get explicitDivideByZeroChecks(): boolean;
            public static set explicitDivideByZeroChecks(value: boolean);
            /** Are array bounds actively validated? */
            public static get explicitArrayBoundsChecks(): boolean;
            public static set explicitArrayBoundsChecks(value: boolean);
            /** Build submission materials. */
            public static get needSubmissionMaterials(): boolean;
            public static set needSubmissionMaterials(value: boolean);
            /** Force installation of package, even if error. */
            public static get forceInstallation(): boolean;
            public static set forceInstallation(value: boolean);
            /** Places the package on the outer edge of the disk. */
            public static get movePackageToDiscOuterEdge(): boolean;
            public static set movePackageToDiscOuterEdge(value: boolean);
            /** Compress files in package. */
            public static get compressFilesInPackage(): boolean;
            public static set compressFilesInPackage(value: boolean);
            /** Is build script only enabled. */
            public static get buildScriptsOnly(): boolean;
            public static set buildScriptsOnly(value: boolean);
            /** Xbox Build subtarget. */
            public static get xboxBuildSubtarget(): UnityEditor.XboxBuildSubtarget;
            public static set xboxBuildSubtarget(value: UnityEditor.XboxBuildSubtarget);
            /** When building an Xbox One Streaming Install package (makepkg.exe) The layout generation code in Unity will assign each Scene and associated assets to individual chunks. Unity will mark Scene 0 as being part of the launch range, IE the set of chunks required to launch the game, you may include additional Scenes in this launch range if you desire, this specifies a range of Scenes (starting at 0) to be included in the launch set.  */
            public static get streamingInstallLaunchRange(): number;
            public static set streamingInstallLaunchRange(value: number);
            /** The currently selected Xbox One Deploy Method. */
            public static get xboxOneDeployMethod(): UnityEditor.XboxOneDeployMethod;
            public static set xboxOneDeployMethod(value: UnityEditor.XboxOneDeployMethod);
            /** The currently selected Xbox One Deploy Drive. */
            public static get xboxOneDeployDrive(): UnityEditor.XboxOneDeployDrive;
            public static set xboxOneDeployDrive(value: UnityEditor.XboxOneDeployDrive);
            public static get xboxOneAdditionalDebugPorts(): string;
            public static set xboxOneAdditionalDebugPorts(value: string);
            /** Sets the XBox to reboot and redeploy when the deployment fails. */
            public static get xboxOneRebootIfDeployFailsAndRetry(): boolean;
            public static set xboxOneRebootIfDeployFailsAndRetry(value: boolean);
            /** Android platform options. */
            public static get androidBuildSubtarget(): UnityEditor.MobileTextureSubtarget;
            public static set androidBuildSubtarget(value: UnityEditor.MobileTextureSubtarget);
            /** WebGL Build subtarget. */
            public static get webGLBuildSubtarget(): UnityEditor.WebGLTextureSubtarget;
            public static set webGLBuildSubtarget(value: UnityEditor.WebGLTextureSubtarget);
            /** ETC2 texture decompression fallback on Android devices that don't support ETC2. */
            public static get androidETC2Fallback(): UnityEditor.AndroidETC2Fallback;
            public static set androidETC2Fallback(value: UnityEditor.AndroidETC2Fallback);
            public static get androidBuildSystem(): UnityEditor.AndroidBuildSystem;
            public static set androidBuildSystem(value: UnityEditor.AndroidBuildSystem);
            public static get androidBuildType(): UnityEditor.AndroidBuildType;
            public static set androidBuildType(value: UnityEditor.AndroidBuildType);
            /** Specifies the type of symbol package to create. */
            public static get androidCreateSymbols(): UnityEditor.AndroidCreateSymbols;
            public static set androidCreateSymbols(value: UnityEditor.AndroidCreateSymbols);
            /** The build type for the Universal Windows Platform. */
            public static get wsaUWPBuildType(): UnityEditor.WSAUWPBuildType;
            public static set wsaUWPBuildType(value: UnityEditor.WSAUWPBuildType);
            /** Sets and gets target UWP SDK to build Windows Store application against. */
            public static get wsaUWPSDK(): string;
            public static set wsaUWPSDK(value: string);
            public static get wsaMinUWPSDK(): string;
            public static set wsaMinUWPSDK(value: string);
            public static get wsaArchitecture(): string;
            public static set wsaArchitecture(value: string);
            /** Sets and gets Visual Studio version to build Windows Store application with. */
            public static get wsaUWPVisualStudioVersion(): string;
            public static set wsaUWPVisualStudioVersion(value: string);
            /** Specifies the Windows DevicePortal connection address of the device to deploy and launch the UWP app on when using Build and Run. */
            public static get windowsDevicePortalAddress(): string;
            public static set windowsDevicePortalAddress(value: string);
            /** Specifies the Windows DevicePortal username for the device to deploy and launch the UWP app on when using Build and Run. */
            public static get windowsDevicePortalUsername(): string;
            public static set windowsDevicePortalUsername(value: string);
            /** Specifies the Windows DevicePortal password for the device to deploy and launch the UWP app on when using Build and Run. */
            public static get windowsDevicePortalPassword(): string;
            public static set windowsDevicePortalPassword(value: string);
            /** Sets and gets the Windows device to launch the UWP app when using Build and Run. */
            public static get wsaBuildAndRunDeployTarget(): UnityEditor.WSABuildAndRunDeployTarget;
            public static set wsaBuildAndRunDeployTarget(value: UnityEditor.WSABuildAndRunDeployTarget);
            /** The override for the maximum texture size when importing assets. */
            public static get overrideMaxTextureSize(): number;
            public static set overrideMaxTextureSize(value: number);
            /** The asset importing override of texture compression. */
            public static get overrideTextureCompression(): UnityEditor.Build.OverrideTextureCompression;
            public static set overrideTextureCompression(value: UnityEditor.Build.OverrideTextureCompression);
            /** The currently active build target. */
            public static get activeBuildTarget(): UnityEditor.BuildTarget;
            /** DEFINE directives for the compiler. */
            public static get activeScriptCompilationDefines(): System.Array$1<string>;
            /** Enables a development build. */
            public static get development(): boolean;
            public static set development(value: boolean);
            /** Specifies code generation option for IL2CPP. */
            public static get il2CppCodeGeneration(): UnityEditor.Build.Il2CppCodeGeneration;
            public static set il2CppCodeGeneration(value: UnityEditor.Build.Il2CppCodeGeneration);
            /** Start the player with a connection to the profiler. */
            public static get connectProfiler(): boolean;
            public static set connectProfiler(value: boolean);
            /** Enables Deep Profiling support in the player. */
            public static get buildWithDeepProfilingSupport(): boolean;
            public static set buildWithDeepProfilingSupport(value: boolean);
            /** Enable source-level debuggers to connect. */
            public static get allowDebugging(): boolean;
            public static set allowDebugging(value: boolean);
            /** Sets the Player to wait for player connection on player start. */
            public static get waitForPlayerConnection(): boolean;
            public static set waitForPlayerConnection(value: boolean);
            /** Export Android Project for use with Android Studio/Gradle. */
            public static get exportAsGoogleAndroidProject(): boolean;
            public static set exportAsGoogleAndroidProject(value: boolean);
            /** Set to true to build an Android App Bundle (aab file) instead of an apk. The default value is false. */
            public static get buildAppBundle(): boolean;
            public static set buildAppBundle(value: boolean);
            /** Symlink sources when generating the project. */
            public static get symlinkSources(): boolean;
            public static set symlinkSources(value: boolean);
            /** The scheme Xcode uses to run this project. */
            public static get iOSXcodeBuildConfig(): UnityEditor.XcodeBuildConfig;
            public static set iOSXcodeBuildConfig(value: UnityEditor.XcodeBuildConfig);
            /** The scheme Xcode uses to run this project. */
            public static get macOSXcodeBuildConfig(): UnityEditor.XcodeBuildConfig;
            public static set macOSXcodeBuildConfig(value: UnityEditor.XcodeBuildConfig);
            public static get switchCreateRomFile(): boolean;
            public static set switchCreateRomFile(value: boolean);
            public static get switchNVNGraphicsDebugger(): boolean;
            public static set switchNVNGraphicsDebugger(value: boolean);
            public static get generateNintendoSwitchShaderInfo(): boolean;
            public static set generateNintendoSwitchShaderInfo(value: boolean);
            public static get switchNVNShaderDebugging(): boolean;
            public static set switchNVNShaderDebugging(value: boolean);
            public static get switchNVNDrawValidation_Light(): boolean;
            public static set switchNVNDrawValidation_Light(value: boolean);
            public static get switchNVNDrawValidation_Heavy(): boolean;
            public static set switchNVNDrawValidation_Heavy(value: boolean);
            public static get switchEnableHeapInspector(): boolean;
            public static set switchEnableHeapInspector(value: boolean);
            public static get switchEnableDebugPad(): boolean;
            public static set switchEnableDebugPad(value: boolean);
            public static get switchRedirectWritesToHostMount(): boolean;
            public static set switchRedirectWritesToHostMount(value: boolean);
            public static get switchHTCSScriptDebugging(): boolean;
            public static set switchHTCSScriptDebugging(value: boolean);
            public static get switchUseLegacyNvnPoolAllocator(): boolean;
            public static set switchUseLegacyNvnPoolAllocator(value: boolean);
            /** Place the built player in the build folder. */
            public static get installInBuildFolder(): boolean;
            public static set installInBuildFolder(value: boolean);
            /** Instructs the player to wait for managed debugger to attach before executing any script code. */
            public static get waitForManagedDebugger(): boolean;
            public static set waitForManagedDebugger(value: boolean);
            /** Select a new build target to be active.
            * @param target Target build platform.
            * @param targetGroup Build target group.
            * @returns True if the build target was successfully switched, false otherwise (for example, if license checks fail, files are missing, or if the user has cancelled the operation via the UI). 
            */
            public static SwitchActiveBuildTarget ($targetGroup: UnityEditor.BuildTargetGroup, $target: UnityEditor.BuildTarget) : boolean
            /** Select a new build target to be active during the next Editor update.
            * @param targetGroup Target build platform.
            * @param target Build target group.
            * @returns True if the build target was successfully switched, false otherwise (for example, if license checks fail, files are missing, or if the user has cancelled the operation via the UI). 
            */
            public static SwitchActiveBuildTargetAsync ($targetGroup: UnityEditor.BuildTargetGroup, $target: UnityEditor.BuildTarget) : boolean
            public static SwitchActiveBuildTarget ($namedBuildTarget: UnityEditor.Build.NamedBuildTarget, $target: UnityEditor.BuildTarget) : boolean
            /** Get the current location for the build. */
            public static GetBuildLocation ($target: UnityEditor.BuildTarget) : string
            /** Set a new location for the build. */
            public static SetBuildLocation ($target: UnityEditor.BuildTarget, $location: string) : void
            /** Set platform specifc Editor setting. * @param platformName The name of the platform.
            * @param name The name of the setting.
            * @param value Setting value.
            */
            public static SetPlatformSettings ($platformName: string, $name: string, $value: string) : void
            public static SetPlatformSettings ($buildTargetGroup: string, $buildTarget: string, $name: string, $value: string) : void
            /** Returns value for platform specifc Editor setting. * @param platformName The name of the platform.
            * @param name The name of the setting.
            */
            public static GetPlatformSettings ($platformName: string, $name: string) : string
            public static GetPlatformSettings ($buildTargetGroup: string, $platformName: string, $name: string) : string
        }
        enum EmbeddedLinuxArchitecture
        { Arm64 = 0, Arm32 = 1, X64 = 2, X86 = 3 }
        /** Desktop platform subtarget type. */
        enum StandaloneBuildSubtarget
        { Player = 0, Server = 1 }
        /** Type of build to generate. */
        enum PS4BuildSubtarget
        { PCHosted = 0, Package = 1, Iso = 2 }
        enum PS4HardwareTarget
        { BaseOnly = 0, NeoAndBase = 1, ProAndBase = 1 }
        /** Target Xbox build type. */
        enum XboxBuildSubtarget
        { Development = 0, Master = 1, Debug = 2 }
        enum XboxOneDeployMethod
        { Push = 0, RunFromPC = 2, Package = 3, PackageStreaming = 4 }
        enum XboxOneDeployDrive
        { Default = 0, Retail = 1, Development = 2, Ext1 = 3, Ext2 = 4, Ext3 = 5, Ext4 = 6, Ext5 = 7, Ext6 = 8, Ext7 = 9 }
        /** Compressed texture format for target build platform. */
        enum MobileTextureSubtarget
        { Generic = 0, DXT = 1, PVRTC = 2, ATC = 3, ETC = 4, ETC2 = 5, ASTC = 6 }
        /** Compressed texture format for target build platform. */
        enum WebGLTextureSubtarget
        { Generic = 0, DXT = 1, ETC2 = 3, ASTC = 4 }
        /** This enumeration has values for different qualities to decompress ETC2 textures on Android devices that don't support the ETC2 texture format. */
        enum AndroidETC2Fallback
        { Quality32Bit = 0, Quality16Bit = 1, Quality32BitDownscaled = 2 }
        /** Type of Android build system. */
        enum AndroidBuildSystem
        { Internal = 0, Gradle = 1, ADT = 2, VisualStudio = 3 }
        /** Build configurations for the generated project. */
        enum AndroidBuildType
        { Debug = 0, Development = 1, Release = 2 }
        /** Defines the options available for choosing the type of symbol file to create in an Android build. */
        enum AndroidCreateSymbols
        { Disabled = 0, Public = 1, Debugging = 2 }
        /** Target device type for a Windows Store application to run on. */
        enum WSASubtarget
        { AnyDevice = 0, PC = 1, Mobile = 2, HoloLens = 3 }
        enum WSASDK
        { SDK80 = 0, SDK81 = 1, PhoneSDK81 = 2, UniversalSDK81 = 3, UWP = 4 }
        /** Determines the output build type when building to Universal Windows Platform. */
        enum WSAUWPBuildType
        { XAML = 0, D3D = 1, ExecutableOnly = 2 }
        /** Specifies the Windows device to deploy and launch the UWP app on when using Build and Run from the Editor. */
        enum WSABuildAndRunDeployTarget
        { LocalMachine = 0, WindowsPhone = 1, DevicePortal = 2 }
        /** Build configurations for the Xcode project Unity generates. */
        enum XcodeBuildConfig
        { Debug = 0, Release = 1 }
        /** Build configurations for the generated Xcode project. */
        enum iOSBuildType
        { Debug = 0, Release = 1 }
        /** How to minify the java code of your binary. */
        enum AndroidMinification
        { None = 0, Proguard = 1, Gradle = 2 }
    }
    namespace UnityEditor.AssetDatabase {
        interface ImportPackageCallback
        { (packageName: string) : void; }
        var ImportPackageCallback: { new (func: (packageName: string) => void): ImportPackageCallback; }
        interface ImportPackageFailedCallback
        { (packageName: string, errorMessage: string) : void; }
        var ImportPackageFailedCallback: { new (func: (packageName: string, errorMessage: string) => void): ImportPackageFailedCallback; }
        enum RefreshImportMode
        { InProcess = 0, OutOfProcessPerQueue = 1 }
    }
    namespace UnityEngine {
        /** Base class for all objects Unity can reference. */
        class Object extends System.Object
        {
        }
        /** Represents  a 128-bit hash value. */
        class Hash128 extends System.ValueType implements System.IComparable, System.IComparable$1<UnityEngine.Hash128>, System.IEquatable$1<UnityEngine.Hash128>
        {
        }
        /** Base class for Texture handling. */
        class Texture extends UnityEngine.Object
        {
        }
        class LazyLoadReference$1<T> extends System.ValueType
        {
        }
        /** Manifest for all the AssetBundles in the build. */
        class AssetBundleManifest extends UnityEngine.Object
        {
        }
        /** A class you can derive from if you want to create objects that don't need to be attached to game objects. */
        class ScriptableObject extends UnityEngine.Object
        {
        /** Creates an instance of a scriptable object.
            * @param className The type of the ScriptableObject to create, as the name of the type.
            * @param type The type of the ScriptableObject to create, as a System.Type instance.
            * @returns The created ScriptableObject. 
            */
            public static CreateInstance ($className: string) : UnityEngine.ScriptableObject
            /** Creates an instance of a scriptable object.
            * @param className The type of the ScriptableObject to create, as the name of the type.
            * @param type The type of the ScriptableObject to create, as a System.Type instance.
            * @returns The created ScriptableObject. 
            */
            public static CreateInstance ($type: System.Type) : UnityEngine.ScriptableObject
            public constructor ()
        }
        /** Access to application run-time data. */
        class Application extends System.Object
        {
        /** Returns true when called in any kind of built Player, or when called in the Editor in Play Mode (Read Only). */
            public static get isPlaying(): boolean;
            /** Whether the player currently has focus. Read-only. */
            public static get isFocused(): boolean;
            /** Returns a GUID for this build (Read Only). */
            public static get buildGUID(): string;
            /** Should the player be running when the application is in the background? */
            public static get runInBackground(): boolean;
            public static set runInBackground(value: boolean);
            /** Returns true when Unity is launched with the -batchmode flag from the command line (Read Only). */
            public static get isBatchMode(): boolean;
            /** Contains the path to the game data folder on the target device (Read Only). */
            public static get dataPath(): string;
            /** The path to the StreamingAssets folder (Read Only). */
            public static get streamingAssetsPath(): string;
            /** (Read Only) Contains the path to a persistent data directory. */
            public static get persistentDataPath(): string;
            /** Contains the path to a temporary data / cache directory (Read Only). */
            public static get temporaryCachePath(): string;
            /** The URL of the document. For WebGL, this a web URL. For Android, iOS, or Universal Windows Platform (UWP) this is a deep link URL. (Read Only) */
            public static get absoluteURL(): string;
            /** The version of the Unity runtime used to play the content. */
            public static get unityVersion(): string;
            /** Returns application version number  (Read Only). */
            public static get version(): string;
            /** Returns the name of the store or package that installed the application (Read Only). */
            public static get installerName(): string;
            /** Returns application identifier at runtime. On Apple platforms this is the 'bundleIdentifier' saved in the info.plist file, on Android it's the 'package' from the AndroidManifest.xml.  */
            public static get identifier(): string;
            /** Returns application install mode (Read Only). */
            public static get installMode(): UnityEngine.ApplicationInstallMode;
            /** Returns application running in sandbox (Read Only). */
            public static get sandboxType(): UnityEngine.ApplicationSandboxType;
            /** Returns application product name (Read Only). */
            public static get productName(): string;
            /** Return application company name (Read Only). */
            public static get companyName(): string;
            /** A unique cloud project identifier. It is unique for every project (Read Only). */
            public static get cloudProjectId(): string;
            /** Specifies the frame rate at which Unity tries to render your game. */
            public static get targetFrameRate(): number;
            public static set targetFrameRate(value: number);
            /** Returns the path to the console log file, or an empty string if the current platform does not support log files. */
            public static get consoleLogPath(): string;
            /** Priority of background loading thread. */
            public static get backgroundLoadingPriority(): UnityEngine.ThreadPriority;
            public static set backgroundLoadingPriority(value: UnityEngine.ThreadPriority);
            /** Returns false if application is altered in any way after it was built. */
            public static get genuine(): boolean;
            /** Returns true if application integrity can be confirmed. */
            public static get genuineCheckAvailable(): boolean;
            /** Returns the platform the game is running on (Read Only). */
            public static get platform(): UnityEngine.RuntimePlatform;
            /** Is the current Runtime platform a known mobile platform. */
            public static get isMobilePlatform(): boolean;
            /** Is the current Runtime platform a known console platform. */
            public static get isConsolePlatform(): boolean;
            /** The language the user's operating system is running in. */
            public static get systemLanguage(): UnityEngine.SystemLanguage;
            /** Returns the type of Internet reachability currently possible on the device. */
            public static get internetReachability(): UnityEngine.NetworkReachability;
            /** Are we running inside the Unity editor? (Read Only) */
            public static get isEditor(): boolean;
            public static Quit ($exitCode: number) : void
            public static Quit () : void
            public static Unload () : void
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded ($levelIndex: number) : boolean
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded ($levelName: string) : boolean
            /** Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.
            * @param obj The object to test.
            * @returns True if the object is part of the playing world. 
            */
            public static IsPlaying ($obj: UnityEngine.Object) : boolean
            public static GetBuildTags () : System.Array$1<string>
            /** Set an array of feature tags for this build. */
            public static SetBuildTags ($buildTags: System.Array$1<string>) : void
            public static HasProLicense () : boolean
            public static RequestAdvertisingIdentifierAsync ($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback) : boolean
            /** Opens the URL specified, subject to the permissions and limitations of your app’s current platform and environment. This is handled in different ways depending on the nature of the URL, and with different security restrictions, depending on the runtime platform. * @param url The URL to open.
            */
            public static OpenURL ($url: string) : void
            /** Get stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static GetStackTraceLogType ($logType: UnityEngine.LogType) : UnityEngine.StackTraceLogType
            /** Set stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static SetStackTraceLogType ($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType) : void
            /** Request authorization to use the webcam or microphone on iOS. */
            public static RequestUserAuthorization ($mode: UnityEngine.UserAuthorization) : UnityEngine.AsyncOperation
            /** Check if the user has authorized use of the webcam or microphone in the Web Player. */
            public static HasUserAuthorization ($mode: UnityEngine.UserAuthorization) : boolean
            public static add_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
            public static remove_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
            public static add_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
            public static remove_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
            public static add_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
            public static remove_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
            public static add_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
            public static remove_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
            public static add_focusChanged ($value: System.Action$1<boolean>) : void
            public static remove_focusChanged ($value: System.Action$1<boolean>) : void
            public static add_deepLinkActivated ($value: System.Action$1<string>) : void
            public static remove_deepLinkActivated ($value: System.Action$1<string>) : void
            public static add_wantsToQuit ($value: System.Func$1<boolean>) : void
            public static remove_wantsToQuit ($value: System.Func$1<boolean>) : void
            public static add_quitting ($value: System.Action) : void
            public static remove_quitting ($value: System.Action) : void
            public static add_unloading ($value: System.Action) : void
            public static remove_unloading ($value: System.Action) : void
            public constructor ()
        }
        /** Application installation mode (Read Only). */
        enum ApplicationInstallMode
        { Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        /** Application sandbox type. */
        enum ApplicationSandboxType
        { Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        /** Stack trace logging options. */
        enum StackTraceLogType
        { None = 0, ScriptOnly = 1, Full = 2 }
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
        enum LogType
        { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        /** Priority of a thread. */
        enum ThreadPriority
        { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        /** Asynchronous operation coroutine. */
        class AsyncOperation extends UnityEngine.YieldInstruction
        {
        }
        /** Base class for all yield instructions. */
        class YieldInstruction extends System.Object
        {
        }
        /** Constants to pass to Application.RequestUserAuthorization. */
        enum UserAuthorization
        { WebCam = 1, Microphone = 2 }
        /** The platform application is running. Returned by Application.platform. */
        enum RuntimePlatform
        { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35, GameCoreScarlett = 36, GameCoreXboxSeries = 36, GameCoreXboxOne = 37, PS5 = 38, EmbeddedLinuxArm64 = 39, EmbeddedLinuxArm32 = 40, EmbeddedLinuxX64 = 41, EmbeddedLinuxX86 = 42, LinuxServer = 43, WindowsServer = 44, OSXServer = 45 }
        /** The language the user's operating system is running in. Returned by Application.systemLanguage. */
        enum SystemLanguage
        { Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
        /** Describes network reachability options. */
        enum NetworkReachability
        { NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        /** MonoBehaviour is the base class from which every Unity script derives. */
        class MonoBehaviour extends UnityEngine.Behaviour
        {
        }
        /** Behaviours are Components that can be enabled or disabled. */
        class Behaviour extends UnityEngine.Component
        {
        }
        /** Base class for everything attached to GameObjects. */
        class Component extends UnityEngine.Object
        {
        }
        /** The GUI class is the interface for Unity's GUI with manual positioning. */
        class GUI extends System.Object
        {
        /** Applies a global tint to the GUI. The tint affects backgrounds and text colors. */
            public static get color(): UnityEngine.Color;
            public static set color(value: UnityEngine.Color);
            /** Global tinting color for all background elements rendered by the GUI. */
            public static get backgroundColor(): UnityEngine.Color;
            public static set backgroundColor(value: UnityEngine.Color);
            /** Tinting color for all text rendered by the GUI. */
            public static get contentColor(): UnityEngine.Color;
            public static set contentColor(value: UnityEngine.Color);
            /** Returns true if any controls changed the value of the input data. */
            public static get changed(): boolean;
            public static set changed(value: boolean);
            /** Is the GUI enabled? */
            public static get enabled(): boolean;
            public static set enabled(value: boolean);
            /** The sorting depth of the currently executing GUI behaviour. */
            public static get depth(): number;
            public static set depth(value: number);
            /** The global skin to use. */
            public static get skin(): UnityEngine.GUISkin;
            public static set skin(value: UnityEngine.GUISkin);
            /** The GUI transform matrix. */
            public static get matrix(): UnityEngine.Matrix4x4;
            public static set matrix(value: UnityEngine.Matrix4x4);
            /** The tooltip of the control the mouse is currently over, or which has keyboard focus. (Read Only). */
            public static get tooltip(): string;
            public static set tooltip(value: string);
            /** Set the name of the next control. */
            public static SetNextControlName ($name: string) : void
            public static GetNameOfFocusedControl () : string
            /** Move keyboard focus to a named control. * @param name Name set using SetNextControlName.
            */
            public static FocusControl ($name: string) : void
            /** Make a window draggable. * @param position The part of the window that can be dragged. This is clipped to the actual window.
            */
            public static DragWindow ($position: UnityEngine.Rect) : void
            /** Bring a specific window to front of the floating windows. * @param windowID The identifier used when you created the window in the Window call.
            */
            public static BringWindowToFront ($windowID: number) : void
            /** Bring a specific window to back of the floating windows. * @param windowID The identifier used when you created the window in the Window call.
            */
            public static BringWindowToBack ($windowID: number) : void
            /** Make a window become the active window. * @param windowID The identifier used when you created the window in the Window call.
            */
            public static FocusWindow ($windowID: number) : void
            public static UnfocusWindow () : void
            /** Make a text or texture label on screen. * @param position Rectangle on the screen to use for the label.
            * @param text Text to display on the label.
            * @param image Texture to display on the label.
            * @param content Text, image and tooltip for this label.
            * @param style The style to use. If left out, the label style from the current GUISkin is used.
            */
            public static Label ($position: UnityEngine.Rect, $text: string) : void
            /** Make a text or texture label on screen. * @param position Rectangle on the screen to use for the label.
            * @param text Text to display on the label.
            * @param image Texture to display on the label.
            * @param content Text, image and tooltip for this label.
            * @param style The style to use. If left out, the label style from the current GUISkin is used.
            */
            public static Label ($position: UnityEngine.Rect, $image: UnityEngine.Texture) : void
            /** Make a text or texture label on screen. * @param position Rectangle on the screen to use for the label.
            * @param text Text to display on the label.
            * @param image Texture to display on the label.
            * @param content Text, image and tooltip for this label.
            * @param style The style to use. If left out, the label style from the current GUISkin is used.
            */
            public static Label ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent) : void
            /** Make a text or texture label on screen. * @param position Rectangle on the screen to use for the label.
            * @param text Text to display on the label.
            * @param image Texture to display on the label.
            * @param content Text, image and tooltip for this label.
            * @param style The style to use. If left out, the label style from the current GUISkin is used.
            */
            public static Label ($position: UnityEngine.Rect, $text: string, $style: UnityEngine.GUIStyle) : void
            /** Make a text or texture label on screen. * @param position Rectangle on the screen to use for the label.
            * @param text Text to display on the label.
            * @param image Texture to display on the label.
            * @param content Text, image and tooltip for this label.
            * @param style The style to use. If left out, the label style from the current GUISkin is used.
            */
            public static Label ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle) : void
            /** Make a text or texture label on screen. * @param position Rectangle on the screen to use for the label.
            * @param text Text to display on the label.
            * @param image Texture to display on the label.
            * @param content Text, image and tooltip for this label.
            * @param style The style to use. If left out, the label style from the current GUISkin is used.
            */
            public static Label ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle) : void
            /** Draw a texture within a rectangle. * @param position Rectangle on the screen to draw the texture within.
            * @param image Texture to display.
            * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
            * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
            * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
            */
            public static DrawTexture ($position: UnityEngine.Rect, $image: UnityEngine.Texture) : void
            /** Draw a texture within a rectangle. * @param position Rectangle on the screen to draw the texture within.
            * @param image Texture to display.
            * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
            * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
            * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
            */
            public static DrawTexture ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $scaleMode: UnityEngine.ScaleMode) : void
            /** Draw a texture within a rectangle. * @param position Rectangle on the screen to draw the texture within.
            * @param image Texture to display.
            * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
            * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
            * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
            */
            public static DrawTexture ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $scaleMode: UnityEngine.ScaleMode, $alphaBlend: boolean) : void
            /** Draw a texture within a rectangle. * @param position Rectangle on the screen to draw the texture within.
            * @param image Texture to display.
            * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
            * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
            * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
            */
            public static DrawTexture ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $scaleMode: UnityEngine.ScaleMode, $alphaBlend: boolean, $imageAspect: number) : void
            /** Draws a border with rounded corners within a rectangle. The texture is used to pattern the border.  Note that this method only works on shader model 2.5 and above. * @param position Rectangle on the screen to draw the texture within.
            * @param image Texture to display.
            * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
            * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
            * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
            * @param color A tint color to apply on the texture.
            * @param borderWidth The width of the border. If 0, the full texture is drawn.
            * @param borderWidths The width of the borders (left, top, right and bottom). If Vector4.zero, the full texture is drawn.
            * @param borderRadius The radius for rounded corners. If 0, corners will not be rounded.
            * @param borderRadiuses The radiuses for rounded corners (top-left, top-right, bottom-right and bottom-left). If Vector4.zero, corners will not be rounded.
            */
            public static DrawTexture ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $scaleMode: UnityEngine.ScaleMode, $alphaBlend: boolean, $imageAspect: number, $color: UnityEngine.Color, $borderWidth: number, $borderRadius: number) : void
            /** Draws a border with rounded corners within a rectangle. The texture is used to pattern the border.  Note that this method only works on shader model 2.5 and above. * @param position Rectangle on the screen to draw the texture within.
            * @param image Texture to display.
            * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
            * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
            * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
            * @param color A tint color to apply on the texture.
            * @param borderWidth The width of the border. If 0, the full texture is drawn.
            * @param borderWidths The width of the borders (left, top, right and bottom). If Vector4.zero, the full texture is drawn.
            * @param borderRadius The radius for rounded corners. If 0, corners will not be rounded.
            * @param borderRadiuses The radiuses for rounded corners (top-left, top-right, bottom-right and bottom-left). If Vector4.zero, corners will not be rounded.
            */
            public static DrawTexture ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $scaleMode: UnityEngine.ScaleMode, $alphaBlend: boolean, $imageAspect: number, $color: UnityEngine.Color, $borderWidths: UnityEngine.Vector4, $borderRadius: number) : void
            public static DrawTexture ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $scaleMode: UnityEngine.ScaleMode, $alphaBlend: boolean, $imageAspect: number, $color: UnityEngine.Color, $borderWidths: UnityEngine.Vector4, $borderRadiuses: UnityEngine.Vector4) : void
            /** Draw a texture within a rectangle with the given texture coordinates. * @param position Rectangle on the screen to draw the texture within.
            * @param image Texture to display.
            * @param texCoords How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
            * @param alphaBlend Whether to alpha blend the image on to the display (the default). If false, the picture is drawn on to the display.
            */
            public static DrawTextureWithTexCoords ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $texCoords: UnityEngine.Rect) : void
            /** Draw a texture within a rectangle with the given texture coordinates. * @param position Rectangle on the screen to draw the texture within.
            * @param image Texture to display.
            * @param texCoords How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
            * @param alphaBlend Whether to alpha blend the image on to the display (the default). If false, the picture is drawn on to the display.
            */
            public static DrawTextureWithTexCoords ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $texCoords: UnityEngine.Rect, $alphaBlend: boolean) : void
            /** Create a Box on the GUI Layer. * @param position Rectangle on the screen to use for the box.
            * @param text Text to display on the box.
            * @param image Texture to display on the box.
            * @param content Text, image and tooltip for this box.
            * @param style The style to use. If left out, the box style from the current GUISkin is used.
            */
            public static Box ($position: UnityEngine.Rect, $text: string) : void
            /** Create a Box on the GUI Layer. * @param position Rectangle on the screen to use for the box.
            * @param text Text to display on the box.
            * @param image Texture to display on the box.
            * @param content Text, image and tooltip for this box.
            * @param style The style to use. If left out, the box style from the current GUISkin is used.
            */
            public static Box ($position: UnityEngine.Rect, $image: UnityEngine.Texture) : void
            /** Create a Box on the GUI Layer. * @param position Rectangle on the screen to use for the box.
            * @param text Text to display on the box.
            * @param image Texture to display on the box.
            * @param content Text, image and tooltip for this box.
            * @param style The style to use. If left out, the box style from the current GUISkin is used.
            */
            public static Box ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent) : void
            /** Create a Box on the GUI Layer. * @param position Rectangle on the screen to use for the box.
            * @param text Text to display on the box.
            * @param image Texture to display on the box.
            * @param content Text, image and tooltip for this box.
            * @param style The style to use. If left out, the box style from the current GUISkin is used.
            */
            public static Box ($position: UnityEngine.Rect, $text: string, $style: UnityEngine.GUIStyle) : void
            /** Create a Box on the GUI Layer. * @param position Rectangle on the screen to use for the box.
            * @param text Text to display on the box.
            * @param image Texture to display on the box.
            * @param content Text, image and tooltip for this box.
            * @param style The style to use. If left out, the box style from the current GUISkin is used.
            */
            public static Box ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle) : void
            /** Create a Box on the GUI Layer. * @param position Rectangle on the screen to use for the box.
            * @param text Text to display on the box.
            * @param image Texture to display on the box.
            * @param content Text, image and tooltip for this box.
            * @param style The style to use. If left out, the box style from the current GUISkin is used.
            */
            public static Box ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle) : void
            /** Make a single press button. The user clicks them and something happens immediately.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns true when the users clicks the button. 
            */
            public static Button ($position: UnityEngine.Rect, $text: string) : boolean
            /** Make a single press button. The user clicks them and something happens immediately.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns true when the users clicks the button. 
            */
            public static Button ($position: UnityEngine.Rect, $image: UnityEngine.Texture) : boolean
            /** Make a single press button. The user clicks them and something happens immediately.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns true when the users clicks the button. 
            */
            public static Button ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent) : boolean
            /** Make a single press button. The user clicks them and something happens immediately.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns true when the users clicks the button. 
            */
            public static Button ($position: UnityEngine.Rect, $text: string, $style: UnityEngine.GUIStyle) : boolean
            /** Make a single press button. The user clicks them and something happens immediately.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns true when the users clicks the button. 
            */
            public static Button ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle) : boolean
            /** Make a single press button. The user clicks them and something happens immediately.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns true when the users clicks the button. 
            */
            public static Button ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle) : boolean
            /** Make a button that is active as long as the user holds it down.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns True when the users clicks the button. 
            */
            public static RepeatButton ($position: UnityEngine.Rect, $text: string) : boolean
            /** Make a button that is active as long as the user holds it down.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns True when the users clicks the button. 
            */
            public static RepeatButton ($position: UnityEngine.Rect, $image: UnityEngine.Texture) : boolean
            /** Make a button that is active as long as the user holds it down.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns True when the users clicks the button. 
            */
            public static RepeatButton ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent) : boolean
            /** Make a button that is active as long as the user holds it down.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns True when the users clicks the button. 
            */
            public static RepeatButton ($position: UnityEngine.Rect, $text: string, $style: UnityEngine.GUIStyle) : boolean
            /** Make a button that is active as long as the user holds it down.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns True when the users clicks the button. 
            */
            public static RepeatButton ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle) : boolean
            /** Make a button that is active as long as the user holds it down.
            * @param position Rectangle on the screen to use for the button.
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns True when the users clicks the button. 
            */
            public static RepeatButton ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle) : boolean
            /** Make a single-line text field where the user can edit a string.
            * @param position Rectangle on the screen to use for the text field.
            * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textField style from the current GUISkin is used.
            * @returns The edited string. 
            */
            public static TextField ($position: UnityEngine.Rect, $text: string) : string
            /** Make a single-line text field where the user can edit a string.
            * @param position Rectangle on the screen to use for the text field.
            * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textField style from the current GUISkin is used.
            * @returns The edited string. 
            */
            public static TextField ($position: UnityEngine.Rect, $text: string, $maxLength: number) : string
            /** Make a single-line text field where the user can edit a string.
            * @param position Rectangle on the screen to use for the text field.
            * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textField style from the current GUISkin is used.
            * @returns The edited string. 
            */
            public static TextField ($position: UnityEngine.Rect, $text: string, $style: UnityEngine.GUIStyle) : string
            /** Make a single-line text field where the user can edit a string.
            * @param position Rectangle on the screen to use for the text field.
            * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textField style from the current GUISkin is used.
            * @returns The edited string. 
            */
            public static TextField ($position: UnityEngine.Rect, $text: string, $maxLength: number, $style: UnityEngine.GUIStyle) : string
            /** Make a text field where the user can enter a password.
            * @param position Rectangle on the screen to use for the text field.
            * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maskChar Character to mask the password with.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textField style from the current GUISkin is used.
            * @returns The edited password. 
            */
            public static PasswordField ($position: UnityEngine.Rect, $password: string, $maskChar: number) : string
            /** Make a text field where the user can enter a password.
            * @param position Rectangle on the screen to use for the text field.
            * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maskChar Character to mask the password with.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textField style from the current GUISkin is used.
            * @returns The edited password. 
            */
            public static PasswordField ($position: UnityEngine.Rect, $password: string, $maskChar: number, $maxLength: number) : string
            /** Make a text field where the user can enter a password.
            * @param position Rectangle on the screen to use for the text field.
            * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maskChar Character to mask the password with.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textField style from the current GUISkin is used.
            * @returns The edited password. 
            */
            public static PasswordField ($position: UnityEngine.Rect, $password: string, $maskChar: number, $style: UnityEngine.GUIStyle) : string
            /** Make a text field where the user can enter a password.
            * @param position Rectangle on the screen to use for the text field.
            * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maskChar Character to mask the password with.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textField style from the current GUISkin is used.
            * @returns The edited password. 
            */
            public static PasswordField ($position: UnityEngine.Rect, $password: string, $maskChar: number, $maxLength: number, $style: UnityEngine.GUIStyle) : string
            /** Make a Multi-line text area where the user can edit a string.
            * @param position Rectangle on the screen to use for the text field.
            * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
            * @returns The edited string. 
            */
            public static TextArea ($position: UnityEngine.Rect, $text: string) : string
            /** Make a Multi-line text area where the user can edit a string.
            * @param position Rectangle on the screen to use for the text field.
            * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
            * @returns The edited string. 
            */
            public static TextArea ($position: UnityEngine.Rect, $text: string, $maxLength: number) : string
            /** Make a Multi-line text area where the user can edit a string.
            * @param position Rectangle on the screen to use for the text field.
            * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
            * @returns The edited string. 
            */
            public static TextArea ($position: UnityEngine.Rect, $text: string, $style: UnityEngine.GUIStyle) : string
            /** Make a Multi-line text area where the user can edit a string.
            * @param position Rectangle on the screen to use for the text field.
            * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
            * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
            * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
            * @returns The edited string. 
            */
            public static TextArea ($position: UnityEngine.Rect, $text: string, $maxLength: number, $style: UnityEngine.GUIStyle) : string
            /** Make an on/off toggle button.
            * @param position Rectangle on the screen to use for the button.
            * @param value Is this button on or off?
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
            * @returns The new value of the button. 
            */
            public static Toggle ($position: UnityEngine.Rect, $value: boolean, $text: string) : boolean
            /** Make an on/off toggle button.
            * @param position Rectangle on the screen to use for the button.
            * @param value Is this button on or off?
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
            * @returns The new value of the button. 
            */
            public static Toggle ($position: UnityEngine.Rect, $value: boolean, $image: UnityEngine.Texture) : boolean
            /** Make an on/off toggle button.
            * @param position Rectangle on the screen to use for the button.
            * @param value Is this button on or off?
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
            * @returns The new value of the button. 
            */
            public static Toggle ($position: UnityEngine.Rect, $value: boolean, $content: UnityEngine.GUIContent) : boolean
            /** Make an on/off toggle button.
            * @param position Rectangle on the screen to use for the button.
            * @param value Is this button on or off?
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
            * @returns The new value of the button. 
            */
            public static Toggle ($position: UnityEngine.Rect, $value: boolean, $text: string, $style: UnityEngine.GUIStyle) : boolean
            /** Make an on/off toggle button.
            * @param position Rectangle on the screen to use for the button.
            * @param value Is this button on or off?
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
            * @returns The new value of the button. 
            */
            public static Toggle ($position: UnityEngine.Rect, $value: boolean, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle) : boolean
            /** Make an on/off toggle button.
            * @param position Rectangle on the screen to use for the button.
            * @param value Is this button on or off?
            * @param text Text to display on the button.
            * @param image Texture to display on the button.
            * @param content Text, image and tooltip for this button.
            * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
            * @returns The new value of the button. 
            */
            public static Toggle ($position: UnityEngine.Rect, $value: boolean, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle) : boolean
            public static Toggle ($position: UnityEngine.Rect, $id: number, $value: boolean, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle) : boolean
            /** Make a toolbar.
            * @param position Rectangle on the screen to use for the toolbar.
            * @param selected The index of the selected button.
            * @param texts An array of strings to show on the toolbar buttons.
            * @param images An array of textures on the toolbar buttons.
            * @param contents An array of text, image and tooltips for the toolbar buttons.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @param buttonSize Determines how toolbar button size is calculated.
            * @returns The index of the selected button. 
            */
            public static Toolbar ($position: UnityEngine.Rect, $selected: number, $texts: System.Array$1<string>) : number
            /** Make a toolbar.
            * @param position Rectangle on the screen to use for the toolbar.
            * @param selected The index of the selected button.
            * @param texts An array of strings to show on the toolbar buttons.
            * @param images An array of textures on the toolbar buttons.
            * @param contents An array of text, image and tooltips for the toolbar buttons.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @param buttonSize Determines how toolbar button size is calculated.
            * @returns The index of the selected button. 
            */
            public static Toolbar ($position: UnityEngine.Rect, $selected: number, $images: System.Array$1<UnityEngine.Texture>) : number
            /** Make a toolbar.
            * @param position Rectangle on the screen to use for the toolbar.
            * @param selected The index of the selected button.
            * @param texts An array of strings to show on the toolbar buttons.
            * @param images An array of textures on the toolbar buttons.
            * @param contents An array of text, image and tooltips for the toolbar buttons.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @param buttonSize Determines how toolbar button size is calculated.
            * @returns The index of the selected button. 
            */
            public static Toolbar ($position: UnityEngine.Rect, $selected: number, $contents: System.Array$1<UnityEngine.GUIContent>) : number
            /** Make a toolbar.
            * @param position Rectangle on the screen to use for the toolbar.
            * @param selected The index of the selected button.
            * @param texts An array of strings to show on the toolbar buttons.
            * @param images An array of textures on the toolbar buttons.
            * @param contents An array of text, image and tooltips for the toolbar buttons.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @param buttonSize Determines how toolbar button size is calculated.
            * @returns The index of the selected button. 
            */
            public static Toolbar ($position: UnityEngine.Rect, $selected: number, $texts: System.Array$1<string>, $style: UnityEngine.GUIStyle) : number
            /** Make a toolbar.
            * @param position Rectangle on the screen to use for the toolbar.
            * @param selected The index of the selected button.
            * @param texts An array of strings to show on the toolbar buttons.
            * @param images An array of textures on the toolbar buttons.
            * @param contents An array of text, image and tooltips for the toolbar buttons.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @param buttonSize Determines how toolbar button size is calculated.
            * @returns The index of the selected button. 
            */
            public static Toolbar ($position: UnityEngine.Rect, $selected: number, $images: System.Array$1<UnityEngine.Texture>, $style: UnityEngine.GUIStyle) : number
            /** Make a toolbar.
            * @param position Rectangle on the screen to use for the toolbar.
            * @param selected The index of the selected button.
            * @param texts An array of strings to show on the toolbar buttons.
            * @param images An array of textures on the toolbar buttons.
            * @param contents An array of text, image and tooltips for the toolbar buttons.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @param buttonSize Determines how toolbar button size is calculated.
            * @returns The index of the selected button. 
            */
            public static Toolbar ($position: UnityEngine.Rect, $selected: number, $contents: System.Array$1<UnityEngine.GUIContent>, $style: UnityEngine.GUIStyle) : number
            public static Toolbar ($position: UnityEngine.Rect, $selected: number, $contents: System.Array$1<UnityEngine.GUIContent>, $style: UnityEngine.GUIStyle, $buttonSize: UnityEngine.GUI.ToolbarButtonSize) : number
            /** Make a grid of buttons.
            * @param position Rectangle on the screen to use for the grid.
            * @param selected The index of the selected grid button.
            * @param texts An array of strings to show on the grid buttons.
            * @param images An array of textures on the grid buttons.
            * @param contents An array of text, image and tooltips for the grid button.
            * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns The index of the selected button. 
            */
            public static SelectionGrid ($position: UnityEngine.Rect, $selected: number, $texts: System.Array$1<string>, $xCount: number) : number
            /** Make a grid of buttons.
            * @param position Rectangle on the screen to use for the grid.
            * @param selected The index of the selected grid button.
            * @param texts An array of strings to show on the grid buttons.
            * @param images An array of textures on the grid buttons.
            * @param contents An array of text, image and tooltips for the grid button.
            * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns The index of the selected button. 
            */
            public static SelectionGrid ($position: UnityEngine.Rect, $selected: number, $images: System.Array$1<UnityEngine.Texture>, $xCount: number) : number
            /** Make a grid of buttons.
            * @param position Rectangle on the screen to use for the grid.
            * @param selected The index of the selected grid button.
            * @param texts An array of strings to show on the grid buttons.
            * @param images An array of textures on the grid buttons.
            * @param contents An array of text, image and tooltips for the grid button.
            * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns The index of the selected button. 
            */
            public static SelectionGrid ($position: UnityEngine.Rect, $selected: number, $content: System.Array$1<UnityEngine.GUIContent>, $xCount: number) : number
            /** Make a grid of buttons.
            * @param position Rectangle on the screen to use for the grid.
            * @param selected The index of the selected grid button.
            * @param texts An array of strings to show on the grid buttons.
            * @param images An array of textures on the grid buttons.
            * @param contents An array of text, image and tooltips for the grid button.
            * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns The index of the selected button. 
            */
            public static SelectionGrid ($position: UnityEngine.Rect, $selected: number, $texts: System.Array$1<string>, $xCount: number, $style: UnityEngine.GUIStyle) : number
            /** Make a grid of buttons.
            * @param position Rectangle on the screen to use for the grid.
            * @param selected The index of the selected grid button.
            * @param texts An array of strings to show on the grid buttons.
            * @param images An array of textures on the grid buttons.
            * @param contents An array of text, image and tooltips for the grid button.
            * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns The index of the selected button. 
            */
            public static SelectionGrid ($position: UnityEngine.Rect, $selected: number, $images: System.Array$1<UnityEngine.Texture>, $xCount: number, $style: UnityEngine.GUIStyle) : number
            /** Make a grid of buttons.
            * @param position Rectangle on the screen to use for the grid.
            * @param selected The index of the selected grid button.
            * @param texts An array of strings to show on the grid buttons.
            * @param images An array of textures on the grid buttons.
            * @param contents An array of text, image and tooltips for the grid button.
            * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
            * @param style The style to use. If left out, the button style from the current GUISkin is used.
            * @returns The index of the selected button. 
            */
            public static SelectionGrid ($position: UnityEngine.Rect, $selected: number, $contents: System.Array$1<UnityEngine.GUIContent>, $xCount: number, $style: UnityEngine.GUIStyle) : number
            /** A horizontal slider the user can drag to change a value between a min and a max.
            * @param position Rectangle on the screen to use for the slider.
            * @param value The value the slider shows. This determines the position of the draggable thumb.
            * @param leftValue The value at the left end of the slider.
            * @param rightValue The value at the right end of the slider.
            * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
            * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
            * @returns The value that has been set by the user. 
            */
            public static HorizontalSlider ($position: UnityEngine.Rect, $value: number, $leftValue: number, $rightValue: number) : number
            /** A horizontal slider the user can drag to change a value between a min and a max.
            * @param position Rectangle on the screen to use for the slider.
            * @param value The value the slider shows. This determines the position of the draggable thumb.
            * @param leftValue The value at the left end of the slider.
            * @param rightValue The value at the right end of the slider.
            * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
            * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
            * @returns The value that has been set by the user. 
            */
            public static HorizontalSlider ($position: UnityEngine.Rect, $value: number, $leftValue: number, $rightValue: number, $slider: UnityEngine.GUIStyle, $thumb: UnityEngine.GUIStyle) : number
            public static HorizontalSlider ($position: UnityEngine.Rect, $value: number, $leftValue: number, $rightValue: number, $slider: UnityEngine.GUIStyle, $thumb: UnityEngine.GUIStyle, $thumbExtent: UnityEngine.GUIStyle) : number
            /** A vertical slider the user can drag to change a value between a min and a max.
            * @param position Rectangle on the screen to use for the slider.
            * @param value The value the slider shows. This determines the position of the draggable thumb.
            * @param topValue The value at the top end of the slider.
            * @param bottomValue The value at the bottom end of the slider.
            * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
            * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
            * @returns The value that has been set by the user. 
            */
            public static VerticalSlider ($position: UnityEngine.Rect, $value: number, $topValue: number, $bottomValue: number) : number
            /** A vertical slider the user can drag to change a value between a min and a max.
            * @param position Rectangle on the screen to use for the slider.
            * @param value The value the slider shows. This determines the position of the draggable thumb.
            * @param topValue The value at the top end of the slider.
            * @param bottomValue The value at the bottom end of the slider.
            * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
            * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
            * @returns The value that has been set by the user. 
            */
            public static VerticalSlider ($position: UnityEngine.Rect, $value: number, $topValue: number, $bottomValue: number, $slider: UnityEngine.GUIStyle, $thumb: UnityEngine.GUIStyle) : number
            public static VerticalSlider ($position: UnityEngine.Rect, $value: number, $topValue: number, $bottomValue: number, $slider: UnityEngine.GUIStyle, $thumb: UnityEngine.GUIStyle, $thumbExtent: UnityEngine.GUIStyle) : number
            public static Slider ($position: UnityEngine.Rect, $value: number, $size: number, $start: number, $end: number, $slider: UnityEngine.GUIStyle, $thumb: UnityEngine.GUIStyle, $horiz: boolean, $id: number, $thumbExtent?: UnityEngine.GUIStyle) : number
            /** Make a horizontal scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
            * @param position Rectangle on the screen to use for the scrollbar.
            * @param value The position between min and max.
            * @param size How much can we see?
            * @param leftValue The value at the left end of the scrollbar.
            * @param rightValue The value at the right end of the scrollbar.
            * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
            * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end. 
            */
            public static HorizontalScrollbar ($position: UnityEngine.Rect, $value: number, $size: number, $leftValue: number, $rightValue: number) : number
            /** Make a horizontal scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
            * @param position Rectangle on the screen to use for the scrollbar.
            * @param value The position between min and max.
            * @param size How much can we see?
            * @param leftValue The value at the left end of the scrollbar.
            * @param rightValue The value at the right end of the scrollbar.
            * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
            * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end. 
            */
            public static HorizontalScrollbar ($position: UnityEngine.Rect, $value: number, $size: number, $leftValue: number, $rightValue: number, $style: UnityEngine.GUIStyle) : number
            /** Make a vertical scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
            * @param position Rectangle on the screen to use for the scrollbar.
            * @param value The position between min and max.
            * @param size How much can we see?
            * @param topValue The value at the top of the scrollbar.
            * @param bottomValue The value at the bottom of the scrollbar.
            * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
            * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end. 
            */
            public static VerticalScrollbar ($position: UnityEngine.Rect, $value: number, $size: number, $topValue: number, $bottomValue: number) : number
            /** Make a vertical scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
            * @param position Rectangle on the screen to use for the scrollbar.
            * @param value The position between min and max.
            * @param size How much can we see?
            * @param topValue The value at the top of the scrollbar.
            * @param bottomValue The value at the bottom of the scrollbar.
            * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
            * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end. 
            */
            public static VerticalScrollbar ($position: UnityEngine.Rect, $value: number, $size: number, $topValue: number, $bottomValue: number, $style: UnityEngine.GUIStyle) : number
            public static BeginClip ($position: UnityEngine.Rect, $scrollOffset: UnityEngine.Vector2, $renderOffset: UnityEngine.Vector2, $resetOffset: boolean) : void
            /** Begin a group. Must be matched with a call to EndGroup. * @param position Rectangle on the screen to use for the group.
            * @param text Text to display on the group.
            * @param image Texture to display on the group.
            * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
            * @param style The style to use for the background.
            */
            public static BeginGroup ($position: UnityEngine.Rect) : void
            /** Begin a group. Must be matched with a call to EndGroup. * @param position Rectangle on the screen to use for the group.
            * @param text Text to display on the group.
            * @param image Texture to display on the group.
            * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
            * @param style The style to use for the background.
            */
            public static BeginGroup ($position: UnityEngine.Rect, $text: string) : void
            /** Begin a group. Must be matched with a call to EndGroup. * @param position Rectangle on the screen to use for the group.
            * @param text Text to display on the group.
            * @param image Texture to display on the group.
            * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
            * @param style The style to use for the background.
            */
            public static BeginGroup ($position: UnityEngine.Rect, $image: UnityEngine.Texture) : void
            /** Begin a group. Must be matched with a call to EndGroup. * @param position Rectangle on the screen to use for the group.
            * @param text Text to display on the group.
            * @param image Texture to display on the group.
            * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
            * @param style The style to use for the background.
            */
            public static BeginGroup ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent) : void
            /** Begin a group. Must be matched with a call to EndGroup. * @param position Rectangle on the screen to use for the group.
            * @param text Text to display on the group.
            * @param image Texture to display on the group.
            * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
            * @param style The style to use for the background.
            */
            public static BeginGroup ($position: UnityEngine.Rect, $style: UnityEngine.GUIStyle) : void
            /** Begin a group. Must be matched with a call to EndGroup. * @param position Rectangle on the screen to use for the group.
            * @param text Text to display on the group.
            * @param image Texture to display on the group.
            * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
            * @param style The style to use for the background.
            */
            public static BeginGroup ($position: UnityEngine.Rect, $text: string, $style: UnityEngine.GUIStyle) : void
            /** Begin a group. Must be matched with a call to EndGroup. * @param position Rectangle on the screen to use for the group.
            * @param text Text to display on the group.
            * @param image Texture to display on the group.
            * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
            * @param style The style to use for the background.
            */
            public static BeginGroup ($position: UnityEngine.Rect, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle) : void
            /** Begin a group. Must be matched with a call to EndGroup. * @param position Rectangle on the screen to use for the group.
            * @param text Text to display on the group.
            * @param image Texture to display on the group.
            * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
            * @param style The style to use for the background.
            */
            public static BeginGroup ($position: UnityEngine.Rect, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle) : void
            public static EndGroup () : void
            public static BeginClip ($position: UnityEngine.Rect) : void
            public static EndClip () : void
            /** Begin a scrolling view inside your GUI.
            * @param position Rectangle on the screen to use for the ScrollView.
            * @param scrollPosition The pixel distance that the view is scrolled in the X and Y directions.
            * @param viewRect The rectangle used inside the scrollview.
            * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
            * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
            * @param alwaysShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when viewRect is wider than position.
            * @param alwaysShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when viewRect is taller than position.
            * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example. 
            */
            public static BeginScrollView ($position: UnityEngine.Rect, $scrollPosition: UnityEngine.Vector2, $viewRect: UnityEngine.Rect) : UnityEngine.Vector2
            /** Begin a scrolling view inside your GUI.
            * @param position Rectangle on the screen to use for the ScrollView.
            * @param scrollPosition The pixel distance that the view is scrolled in the X and Y directions.
            * @param viewRect The rectangle used inside the scrollview.
            * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
            * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
            * @param alwaysShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when viewRect is wider than position.
            * @param alwaysShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when viewRect is taller than position.
            * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example. 
            */
            public static BeginScrollView ($position: UnityEngine.Rect, $scrollPosition: UnityEngine.Vector2, $viewRect: UnityEngine.Rect, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean) : UnityEngine.Vector2
            /** Begin a scrolling view inside your GUI.
            * @param position Rectangle on the screen to use for the ScrollView.
            * @param scrollPosition The pixel distance that the view is scrolled in the X and Y directions.
            * @param viewRect The rectangle used inside the scrollview.
            * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
            * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
            * @param alwaysShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when viewRect is wider than position.
            * @param alwaysShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when viewRect is taller than position.
            * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example. 
            */
            public static BeginScrollView ($position: UnityEngine.Rect, $scrollPosition: UnityEngine.Vector2, $viewRect: UnityEngine.Rect, $horizontalScrollbar: UnityEngine.GUIStyle, $verticalScrollbar: UnityEngine.GUIStyle) : UnityEngine.Vector2
            /** Begin a scrolling view inside your GUI.
            * @param position Rectangle on the screen to use for the ScrollView.
            * @param scrollPosition The pixel distance that the view is scrolled in the X and Y directions.
            * @param viewRect The rectangle used inside the scrollview.
            * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
            * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
            * @param alwaysShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when viewRect is wider than position.
            * @param alwaysShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when viewRect is taller than position.
            * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example. 
            */
            public static BeginScrollView ($position: UnityEngine.Rect, $scrollPosition: UnityEngine.Vector2, $viewRect: UnityEngine.Rect, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean, $horizontalScrollbar: UnityEngine.GUIStyle, $verticalScrollbar: UnityEngine.GUIStyle) : UnityEngine.Vector2
            public static EndScrollView () : void
            /** Ends a scrollview started with a call to BeginScrollView. */
            public static EndScrollView ($handleScrollWheel: boolean) : void
            /** Scrolls all enclosing scrollviews so they try to make position visible. */
            public static ScrollTo ($position: UnityEngine.Rect) : void
            public static ScrollTowards ($position: UnityEngine.Rect, $maxDelta: number) : boolean
            public static Window ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $text: string) : UnityEngine.Rect
            public static Window ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $image: UnityEngine.Texture) : UnityEngine.Rect
            public static Window ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $content: UnityEngine.GUIContent) : UnityEngine.Rect
            public static Window ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $text: string, $style: UnityEngine.GUIStyle) : UnityEngine.Rect
            public static Window ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle) : UnityEngine.Rect
            public static Window ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $title: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle) : UnityEngine.Rect
            public static ModalWindow ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $text: string) : UnityEngine.Rect
            public static ModalWindow ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $image: UnityEngine.Texture) : UnityEngine.Rect
            public static ModalWindow ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $content: UnityEngine.GUIContent) : UnityEngine.Rect
            public static ModalWindow ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $text: string, $style: UnityEngine.GUIStyle) : UnityEngine.Rect
            public static ModalWindow ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle) : UnityEngine.Rect
            public static ModalWindow ($id: number, $clientRect: UnityEngine.Rect, $func: UnityEngine.GUI.WindowFunction, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle) : UnityEngine.Rect
            public static DragWindow () : void
            public constructor ()
        }
        /** Representation of RGBA colors. */
        class Color extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Color>
        {
        }
        /** A 2D Rectangle defined by X and Y position, width and height. */
        class Rect extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Rect>
        {
        /** Shorthand for writing new Rect(0,0,0,0). */
            public static get zero(): UnityEngine.Rect;
            /** The X coordinate of the rectangle. */
            public get x(): number;
            public set x(value: number);
            /** The Y coordinate of the rectangle. */
            public get y(): number;
            public set y(value: number);
            /** The X and Y position of the rectangle. */
            public get position(): UnityEngine.Vector2;
            public set position(value: UnityEngine.Vector2);
            /** The position of the center of the rectangle. */
            public get center(): UnityEngine.Vector2;
            public set center(value: UnityEngine.Vector2);
            /** The position of the minimum corner of the rectangle. */
            public get min(): UnityEngine.Vector2;
            public set min(value: UnityEngine.Vector2);
            /** The position of the maximum corner of the rectangle. */
            public get max(): UnityEngine.Vector2;
            public set max(value: UnityEngine.Vector2);
            /** The width of the rectangle, measured from the X position. */
            public get width(): number;
            public set width(value: number);
            /** The height of the rectangle, measured from the Y position. */
            public get height(): number;
            public set height(value: number);
            /** The width and height of the rectangle. */
            public get size(): UnityEngine.Vector2;
            public set size(value: UnityEngine.Vector2);
            /** The minimum X coordinate of the rectangle. */
            public get xMin(): number;
            public set xMin(value: number);
            /** The minimum Y coordinate of the rectangle. */
            public get yMin(): number;
            public set yMin(value: number);
            /** The maximum X coordinate of the rectangle. */
            public get xMax(): number;
            public set xMax(value: number);
            /** The maximum Y coordinate of the rectangle. */
            public get yMax(): number;
            public set yMax(value: number);
            /** Creates a rectangle from min/max coordinate values.
            * @param xmin The minimum X coordinate.
            * @param ymin The minimum Y coordinate.
            * @param xmax The maximum X coordinate.
            * @param ymax The maximum Y coordinate.
            * @returns A rectangle matching the specified coordinates. 
            */
            public static MinMaxRect ($xmin: number, $ymin: number, $xmax: number, $ymax: number) : UnityEngine.Rect
            /** Set components of an existing Rect. */
            public Set ($x: number, $y: number, $width: number, $height: number) : void
            /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param point Point to test.
            * @param allowInverse Does the test allow the Rect's width and height to be negative?
            * @returns True if the point lies within the specified rectangle. 
            */
            public Contains ($point: UnityEngine.Vector2) : boolean
            /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param point Point to test.
            * @param allowInverse Does the test allow the Rect's width and height to be negative?
            * @returns True if the point lies within the specified rectangle. 
            */
            public Contains ($point: UnityEngine.Vector3) : boolean
            /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param point Point to test.
            * @param allowInverse Does the test allow the Rect's width and height to be negative?
            * @returns True if the point lies within the specified rectangle. 
            */
            public Contains ($point: UnityEngine.Vector3, $allowInverse: boolean) : boolean
            /** Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work. * @param other Other rectangle to test overlapping with.
            * @param allowInverse Does the test allow the widths and heights of the Rects to be negative?
            */
            public Overlaps ($other: UnityEngine.Rect) : boolean
            /** Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work. * @param other Other rectangle to test overlapping with.
            * @param allowInverse Does the test allow the widths and heights of the Rects to be negative?
            */
            public Overlaps ($other: UnityEngine.Rect, $allowInverse: boolean) : boolean
            /** Returns a point inside a rectangle, given normalized coordinates. * @param rectangle Rectangle to get a point inside.
            * @param normalizedRectCoordinates Normalized coordinates to get a point for.
            */
            public static NormalizedToPoint ($rectangle: UnityEngine.Rect, $normalizedRectCoordinates: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns the normalized coordinates cooresponding the the point. * @param rectangle Rectangle to get normalized coordinates inside.
            * @param point A point inside the rectangle to get normalized coordinates for.
            */
            public static PointToNormalized ($rectangle: UnityEngine.Rect, $point: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Inequality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
            public static op_Equality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Rect) : boolean
            public ToString () : string
            /** Returns a formatted string for this Rect. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this Rect. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $width: number, $height: number)
            public constructor ($position: UnityEngine.Vector2, $size: UnityEngine.Vector2)
            public constructor ($source: UnityEngine.Rect)
        }
        /** Defines how GUI looks and behaves. */
        class GUISkin extends UnityEngine.ScriptableObject
        {
        }
        /** A standard 4x4 transformation matrix. */
        class Matrix4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Matrix4x4>
        {
        }
        /** The contents of a GUI element. */
        class GUIContent extends System.Object
        {
        }
        /** Styling information for GUI elements. */
        class GUIStyle extends System.Object
        {
        }
        /** Scaling mode to draw textures with. */
        enum ScaleMode
        { StretchToFill = 0, ScaleAndCrop = 1, ScaleToFit = 2 }
        /** Representation of four-dimensional vectors. */
        class Vector4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector4>
        {
        }
        /** Representation of 2D vectors and points. */
        class Vector2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector2>
        {
        }
        /** Representation of 3D vectors and points. */
        class Vector3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector3>
        {
        }
        /** Provides access to display information. */
        class Screen extends System.Object
        {
        /** The current width of the screen window in pixels (Read Only). */
            public static get width(): number;
            /** The current height of the screen window in pixels (Read Only). */
            public static get height(): number;
            /** The current DPI of the screen / device (Read Only). */
            public static get dpi(): number;
            /** The current screen resolution (Read Only). */
            public static get currentResolution(): UnityEngine.Resolution;
            /** Returns all full-screen resolutions that the monitor supports (Read Only). */
            public static get resolutions(): System.Array$1<UnityEngine.Resolution>;
            /** Enables full-screen mode for the application. */
            public static get fullScreen(): boolean;
            public static set fullScreen(value: boolean);
            /** Set this property to one of the values in FullScreenMode to change the display mode of your application. */
            public static get fullScreenMode(): UnityEngine.FullScreenMode;
            public static set fullScreenMode(value: UnityEngine.FullScreenMode);
            /** Returns the safe area of the screen in pixels (Read Only). */
            public static get safeArea(): UnityEngine.Rect;
            /** Returns a list of screen areas that are not functional for displaying content (Read Only). */
            public static get cutouts(): System.Array$1<UnityEngine.Rect>;
            /** Enables auto-rotation to portrait. */
            public static get autorotateToPortrait(): boolean;
            public static set autorotateToPortrait(value: boolean);
            /** Enables auto-rotation to portrait, upside down. */
            public static get autorotateToPortraitUpsideDown(): boolean;
            public static set autorotateToPortraitUpsideDown(value: boolean);
            /** Enables auto-rotation to landscape left */
            public static get autorotateToLandscapeLeft(): boolean;
            public static set autorotateToLandscapeLeft(value: boolean);
            /** Enables auto-rotation to landscape right. */
            public static get autorotateToLandscapeRight(): boolean;
            public static set autorotateToLandscapeRight(value: boolean);
            /** Specifies logical orientation of the screen. */
            public static get orientation(): UnityEngine.ScreenOrientation;
            public static set orientation(value: UnityEngine.ScreenOrientation);
            /** A power saving setting, allowing the screen to dim some time after the last active user interaction. */
            public static get sleepTimeout(): number;
            public static set sleepTimeout(value: number);
            /** The current brightness of the screen. */
            public static get brightness(): number;
            public static set brightness(value: number);
            /** The position of the top left corner of the main window relative to the top left corner of the display. */
            public static get mainWindowPosition(): UnityEngine.Vector2Int;
            /** The display information associated with the display that the main application window is on. */
            public static get mainWindowDisplayInfo(): UnityEngine.DisplayInfo;
            /** Switches the screen resolution. */
            public static SetResolution ($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode, $preferredRefreshRate: number) : void
            /** Switches the screen resolution. */
            public static SetResolution ($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode) : void
            /** Switches the screen resolution. */
            public static SetResolution ($width: number, $height: number, $fullscreen: boolean, $preferredRefreshRate: number) : void
            /** Switches the screen resolution. */
            public static SetResolution ($width: number, $height: number, $fullscreen: boolean) : void
            public static GetDisplayLayout ($displayLayout: System.Collections.Generic.List$1<UnityEngine.DisplayInfo>) : void
            /** Moves the main window to the specified position relative to the top left corner of the specified display. Moving the window is an asynchronous operation, which can take multiple frames. Position value is represented in pixels. Moving the window is an asynchronous operation, which can take multiple frames.
            * @param display The target display where the window should move to.
            * @param position The position the window moves to. Relative to the top left corner of the specified display in pixels.
            * @returns Returns AsyncOperation that represents moving the window. 
            */
            public static MoveMainWindowTo ($display: UnityEngine.DisplayInfo, $position: UnityEngine.Vector2Int) : UnityEngine.AsyncOperation
            public constructor ()
        }
        /** Represents a display resolution. */
        class Resolution extends System.ValueType
        {
        }
        /** Platform agnostic fullscreen mode. Not all platforms support all modes. */
        enum FullScreenMode
        { ExclusiveFullScreen = 0, FullScreenWindow = 1, MaximizedWindow = 2, Windowed = 3 }
        /** Describes screen orientation. */
        enum ScreenOrientation
        { Unknown = 0, Landscape = 3, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, AutoRotation = 5 }
        /** Representation of 2D vectors and points using integers. */
        class Vector2Int extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector2Int>
        {
        }
        /** Represents a connected display. */
        class DisplayInfo extends System.ValueType implements System.IEquatable$1<UnityEngine.DisplayInfo>
        {
        }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider
        {
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
    }
    namespace System.Runtime.InteropServices {
        interface _MemberInfo
        {
        }
        interface _Type
        {
        }
        interface _Exception
        {
        }
    }
    namespace UnityEditor.AssetImporter {
        class SourceAssetIdentifier extends System.ValueType
        {
        }
    }
    namespace UnityEditor.Build.Reporting {
        /** The BuildReport API gives you information about the Unity build process. */
        class BuildReport extends UnityEngine.Object
        {
        }
    }
    namespace UnityEditor.Build {
        /** Sets which texture compression override to use when importing assets. */
        enum OverrideTextureCompression
        { NoOverride = 0, ForceUncompressed = 1, ForceFastCompressor = 2 }
        /** Build Target by name. */
        class NamedBuildTarget extends System.ValueType implements System.IComparable$1<UnityEditor.Build.NamedBuildTarget>, System.IEquatable$1<UnityEditor.Build.NamedBuildTarget>
        {
        }
        /** Options to control code generation for IL2CPP compiler. */
        enum Il2CppCodeGeneration
        { OptimizeSpeed = 0, OptimizeSize = 1 }
    }
    namespace UnityEngine.Application {
        interface AdvertisingIdentifierCallback
        { (advertisingId: string, trackingEnabled: boolean, errorMsg: string) : void; }
        var AdvertisingIdentifierCallback: { new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback; }
        interface LowMemoryCallback
        { () : void; }
        var LowMemoryCallback: { new (func: () => void): LowMemoryCallback; }
        interface LogCallback
        { (condition: string, stackTrace: string, type: UnityEngine.LogType) : void; }
        var LogCallback: { new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback; }
    }
    namespace UnityEngine.Events {
        /** Zero argument delegate used by UnityEvents. */
        interface UnityAction
        { () : void; }
        var UnityAction: { new (func: () => void): UnityAction; }
    }
        class Entrance extends UnityEngine.MonoBehaviour
        {
            public ModName : string
            public JsStart : System.Action
            public JsUpdate : System.Action
            public JsFixedUpdate : System.Action
            public JsOnDestroy : System.Action
            public JsOnGUI : System.Action
            public constructor ()
        }
        namespace System.Environment {
        enum SpecialFolder
        { MyDocuments = 5, Desktop = 0, MyComputer = 17, Programs = 2, Personal = 5, Favorites = 6, Startup = 7, Recent = 8, SendTo = 9, StartMenu = 11, MyMusic = 13, DesktopDirectory = 16, Templates = 21, ApplicationData = 26, LocalApplicationData = 28, InternetCache = 32, Cookies = 33, History = 34, CommonApplicationData = 35, System = 37, ProgramFiles = 38, MyPictures = 39, CommonProgramFiles = 43, MyVideos = 14, NetworkShortcuts = 19, Fonts = 20, CommonStartMenu = 22, CommonPrograms = 23, CommonStartup = 24, CommonDesktopDirectory = 25, PrinterShortcuts = 27, Windows = 36, UserProfile = 40, SystemX86 = 41, ProgramFilesX86 = 42, CommonProgramFilesX86 = 44, CommonTemplates = 45, CommonDocuments = 46, CommonAdminTools = 47, AdminTools = 48, CommonMusic = 53, CommonPictures = 54, CommonVideos = 55, Resources = 56, LocalizedResources = 57, CommonOemLinks = 58, CDBurning = 59 }
        enum SpecialFolderOption
        { None = 0, DoNotVerify = 16384, Create = 32768 }
    }
    namespace UnityEngine.GUI {
        enum ToolbarButtonSize
        { Fixed = 0, FitToContents = 1 }
        interface WindowFunction
        { (id: number) : void; }
        var WindowFunction: { new (func: (id: number) => void): WindowFunction; }
    }
}
